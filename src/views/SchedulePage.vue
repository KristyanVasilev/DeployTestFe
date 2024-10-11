<script setup>
import { ref, watch, onMounted } from "vue";
import { useMatchDataStore } from "@/stores/matchDataStore.js";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { debounce } from "lodash";
const { mobile } = useDisplay();
const tab = ref(null);
const teamSearch = ref({
  search: "",
});
// Pagination states
const nextPagination = ref({ page: 1, itemsPerPage: 10 });
const pastPagination = ref({ page: 1, itemsPerPage: 10 });

const matchDataStore = useMatchDataStore();
const { nextMatches, pastMatches, totalNextMatches, totalPastMatches, nextMatchesLoading, pastMatchesLoading } =
  storeToRefs(matchDataStore);
// Fetch matches when the component is mounted
onMounted(async () => {
  await matchDataStore.fetchNextMatches(
    teamSearch.value.search,
    nextPagination.value.page,
    nextPagination.value.itemsPerPage
  );
  await matchDataStore.fetchPastMatches(
    teamSearch.value.search,
    pastPagination.value.page,
    pastPagination.value.itemsPerPage
  );
});

// Debounced search function
const debouncedFetchMatches = debounce(async () => {
  await matchDataStore.fetchNextMatches(
    teamSearch.value.search,
    nextPagination.value.page,
    nextPagination.value.itemsPerPage
  );
  await matchDataStore.fetchPastMatches(
    teamSearch.value.search,
    pastPagination.value.page,
    pastPagination.value.itemsPerPage
  );
}, 300);

// Watcher for teamSearch to trigger API call on change
watch(
  () => teamSearch.value.search,
  async () => {
    debouncedFetchMatches();
  }
);
// Watch pagination for next matches
watch(
  nextPagination,
  async () => {
    await matchDataStore.fetchNextMatches(
      teamSearch.value.search,
      nextPagination.value.page,
      nextPagination.value.itemsPerPage
    );
  },
  { deep: true }
);

// Watch pagination for past matches
watch(
  pastPagination,
  async () => {
    await matchDataStore.fetchPastMatches(
      teamSearch.value.search,
      pastPagination.value.page,
      pastPagination.value.itemsPerPage
    );
  },
  { deep: true }
);
const pastMatchesHeaders = [
  {
    align: "start",
    key: "date",
    sortable: false,
    title: "Дата",
  },
  { key: "homeTeamName", title: "Домакин", sortable: false },

  { key: "homeTeamGoals", title: "Резултат", sortable: false },
  { key: "awayTeamName", title: "Гост", sortable: false },
];
const nextMatchesHeaders = [
  {
    align: "start",
    key: "date",
    sortable: false,
    title: "Дата",
  },
  { key: "homeTeamName", title: "Домакин", sortable: false },

  { key: "awayTeamName", title: "Гост", sortable: false },
];
const getRowClass = (team) => {
  return "background-color: #1b1b1b;color: #FFFFFF;font-weight:500";
};
</script>

<template>
  <div class="base">
    <v-container fluid>
      <v-row justify="center mt-12">
        <v-col class="v-col-auto">
          <v-icon icon="mdi-magnify" color="#1b1b1b" class="my-2 pl-6"></v-icon>
        </v-col>
        <v-col class="v-col-auto">
          <v-text-field
            class="search-field"
            :loading="loading"
            density="compact"
            label="Потърси отбор"
            variant="solo"
            hide-details
            single-line
            :width="mobile ? '300px' : '400px'"
            clearable
            rounded
            v-model="teamSearch.search"
            @click:append-inner="onClick"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid :class="mobile ? 'px-4' : 'px-10'">
      <v-tabs fixed-tabs v-model="tab">
        <v-tab size="small" text="Предстоящи мачове" value="next"></v-tab>
        <v-tab size="small" text="Изминали мачове" value="past"></v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="next">
          <v-data-table-server
            class="next-matches-table"
            :headers="nextMatchesHeaders"
            :items="nextMatches"
            :items-length="totalNextMatches"
            no-data-text="Не са открити мачове"
            :loading="nextMatchesLoading"
            @update:page="(page) => (nextPagination.page = page)"
          >
            <template v-slot:item="{ item }">
              <tr :style="getRowClass(item)">
                <td>{{ item.date }}</td>
                <td>
                  <span class="d-flex align-center">
                    <img
                      :src="
                        item.homeTeamLogo ||
                        'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'
                      "
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    <router-link
                      class="team-name"
                      :to="'/teams/' + item.homeTeamId"
                      >{{ item.homeTeamName }}</router-link
                    >
                  </span>
                </td>

                <td>
                  <span class="d-flex align-center">
                    <img
                      :src="
                        item.awayTeamLogo ||
                        'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'
                      "
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />

                    <router-link
                      class="team-name"
                      :to="'/teams/' + item.awayTeamId"
                      >{{ item.awayTeamName }}</router-link
                    >
                  </span>
                </td>
              </tr>
            </template>
          </v-data-table-server>
        </v-tabs-window-item>

        <v-tabs-window-item value="past">
          <v-data-table-server
            class="past-matches-table"
            :headers="pastMatchesHeaders"
            :items="pastMatches"
            :items-length="totalPastMatches"
            no-data-text="Не са открити мачове"
            :loading="pastMatchesLoading"
            @update:page="(page) => (pastPagination.page = page)"
          >
            <template v-slot:item="{ item }">
              <tr :style="getRowClass(item)">
                <td>{{ item.date }}</td>
                <td>
                  <span class="d-flex align-center">
                    <img
                      :src="
                        item.homeTeamLogo ||
                        'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'
                      "
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />

                    <router-link
                      class="team-name"
                      :to="'/teams/' + item.homeTeamId"
                      >{{ item.homeTeamName }}</router-link
                    >
                  </span>
                </td>

                <td>{{ item.homeTeamGoals + " - " + item.awayTeamGoals }}</td>

                <td>
                  <span class="d-flex align-center">
                    <img
                      :src="
                        item.awayTeamLogo ||
                        'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'
                      "
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    <router-link
                      class="team-name"
                      :to="'/teams/' + item.awayTeamId"
                      >{{ item.awayTeamName }}</router-link
                    >
                  </span>
                </td>
              </tr>
            </template>
          </v-data-table-server>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </div>
</template>

<style scoped lang="sass">
.v-table
  background-color: #253C59 !important
  opacity: 0.8
.v-tab
  color: #1c1c1c
.v-tab--selected
  font-weight: bold
  color: #1c1c1c  !important

/* Remove underline and text color */
.team-name
  text-decoration: none
  color: inherit
/* Additional style for visited links if needed */
.team-name:visited
  color: inherit
  text-decoration: none

/* Optional: Custom hover styles */
.team-name:hover
  color: inherit
  text-decoration: none

.search-field
  opacity: 0.8

:deep(.v-data-table-footer__items-per-page)
  display: none !important
:deep(.v-data-table-footer)
  padding:5px 4px
</style>
