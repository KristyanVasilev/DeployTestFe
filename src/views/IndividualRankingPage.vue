<script setup>
import { ref, watch, onMounted } from "vue";
import { useMatchDataStore } from "@/stores/matchDataStore.js";
import { storeToRefs } from "pinia";
import { useDisplay } from "vuetify";
import { debounce } from "lodash";
const { mobile } = useDisplay();
const tab = ref(null);
const playerSearch = ref({
  search: "",
});
// Pagination states
const goalscorersPagination = ref({ page: 1, itemsPerPage: 10 });
const keepersPagination = ref({ page: 1, itemsPerPage: 10 });

const matchDataStore = useMatchDataStore();
const {  goalscorers, goalscorersLoading, totalGoalscorers, keepers, keepersLoading, totalKeepers} =
  storeToRefs(matchDataStore);
// Fetch players when the component is mounted
onMounted(async () => {
  await matchDataStore.fetchGoalScorers(
    playerSearch.value.search,
    goalscorersPagination.value.page,
    goalscorersPagination.value.itemsPerPage
  );
  matchDataStore.goalscorers = matchDataStore.goalscorers.map((player, index) => ({
    ...player,
    position: index + 1, // Start positions from 1
  }));
  await matchDataStore.fetchKeepers(
    playerSearch.value.search,
    keepersPagination.value.page,
    keepersPagination.value.itemsPerPage
  );
  matchDataStore.keepers = matchDataStore.keepers.map((player, index) => ({
    ...player,
    position: index + 1, // Start positions from 1
  }));
});

// Debounced search function
const debouncedFetchPlayers = debounce(async () => {
  await matchDataStore.fetchGoalScorers(
    playerSearch.value.search,
    goalscorersPagination.value.page,
    goalscorersPagination.value.itemsPerPage
  );
  await matchDataStore.fetchKeepers(
    playerSearch.value.search,
    keepersPagination.value.page,
    keepersPagination.value.itemsPerPage
  );
}, 300);

// Watcher for playerSearch to trigger API call on change
watch(
  () => playerSearch.value.search,
  async () => {
    debouncedFetchPlayers();
  }
);
// Watch pagination for goalscorers
watch(
  goalscorersPagination,
  async () => {
    await matchDataStore.fetchGoalScorers(
      playerSearch.value.search,
      goalscorersPagination.value.page,
      goalscorersPagination.value.itemsPerPage
    );
  },
  { deep: true }
);

// Watch pagination for keepers
watch(
  keepersPagination,
  async () => {
    await matchDataStore.fetchKeepers(
      playerSearch.value.search,
      keepersPagination.value.page,
      keepersPagination.value.itemsPerPage
    );
  },
  { deep: true }
);
const topKeepersHeaders = [
{
    align: "start",
    key: "position",
    sortable: false,
    title: "Позиция",
  },
  { key: "playerName", title: "Име", sortable: false },
  { key: "teamName", title: "Отбор", sortable: false },
  { key: "matchesPlayed", title: "Мачове", sortable: false },
  { key: "mvp", title: "MVP", sortable: false },
  { key: "goals", title: "Голове", sortable: false },
  { key: "keeperSaves", title: "Спасявания на вратар", sortable: false },
];
const goalscorersHeaders = [
{
    align: "start",
    key: "position",
    sortable: false,
    title: "Позиция",
  },
  { key: "playerName", title: "Име", sortable: false },
  { key: "teamName", title: "Отбор", sortable: false },
  { key: "matchesPlayed", title: "Мачове", sortable: false },
  { key: "mvp", title: "MVP", sortable: false },
  { key: "goals", title: "Голове", sortable: false },
  
];
const getRowClass = (team) => {
  return "background-color: #1b1b1b;color: #FFFFFF;font-weight:500";
};
const getPositionClass = (team) => {
  if (team.position == "1")
    return "background-color: #debd68; color: #1b1b1b; font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";
  if (team.position == "2")
    return "background-color: #d8d8d8; color: #1b1b1b; font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";
  if (team.position == "3")
    return "background-color: #dc7f64; color: #1b1b1b; font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";

  return "font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";
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
            label="Потърси играч"
            variant="solo"
            hide-details
            single-line
            :width="mobile ? '300px' : '400px'"
            clearable
            rounded
            v-model="playerSearch.search"
            @click:append-inner="onClick"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid :class="mobile ? 'px-4' : 'px-10'">
      <v-tabs fixed-tabs v-model="tab">
        <v-tab size="small" text="Голмайстори" value="goalscorers"></v-tab>
        <v-tab size="small" text="Топ вратари" value="keepers"></v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item value="goalscorers">
          <v-data-table-server
            class="goalscorers-table"
            :headers="goalscorersHeaders"
            :items="goalscorers"
            :items-length="totalGoalscorers"
            no-data-text="Не са открити играчи"
            :loading="goalscorersLoading"
            @update:page="(page) => (goalscorersPagination.page = page)"
          >
            <template v-slot:item="{ item }">
              <tr :style="getRowClass(item)">
                <td>
                  <span :style="getPositionClass(item)">{{
                    item.position
                  }}</span>
                </td>
                <td >
                  <span class="d-flex align-center" >
                    <img
                      :src="item.playerImage || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'"
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    {{ item.playerName }}
                  </span>
                </td>
                <td >
                  <span class="d-flex align-center" >
                    <img
                      :src="item.teamLogo || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'"
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    <router-link class="team-name" :to="'/teams/' + item.teamId">{{ item.teamName }}</router-link >
                  </span>
                </td>
                <td>{{ item.matchesPlayed }}</td>
                <td>{{ item.mvp }}</td>
                <td>{{ item.goals }}</td>
               
              </tr>
            </template> 
          </v-data-table-server>
        </v-tabs-window-item>

        <v-tabs-window-item value="keepers">
          <v-data-table-server
            class="keepers-table"
            :headers="topKeepersHeaders"
            :items="keepers"
            :items-length="totalKeepers"
            no-data-text="Не са открити играчи"
            :loading="keepersLoading"
            @update:page="(page) => (keepersPagination.page = page)"
          >
            <template v-slot:item="{ item }">
              <tr :style="getRowClass(item)">
                <td>
                  <span :style="getPositionClass(item)">{{
                    item.position
                  }}</span>
                </td>
                <td >
                  <span class="d-flex align-center" >
                    <img
                      :src="item.playerImage || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'"
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    {{ item.playerName }}
                  </span>
                </td>
                <td >
                  <span class="d-flex align-center" >
                    <img
                      :src="item.teamLogo || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'"
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    <router-link class="team-name" :to="'/teams/' + item.teamId">{{ item.teamName }}</router-link >
                  </span>
                </td>
                <td>{{ item.matchesPlayed }}</td>
                <td>{{ item.mvp }}</td>
                <td>{{ item.goals }}</td>
                <td>{{ item.keeperSaves }}</td>
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
