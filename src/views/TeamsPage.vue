<script setup>
import { ref, computed, onMounted } from "vue";
import { useMatchDataStore } from '@/stores/matchDataStore.js';
import { storeToRefs } from 'pinia';
import { debounce } from 'lodash';
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const teamsSearch = ref({
  search: "",
});
const matchDataStore = useMatchDataStore();
const { teams } = storeToRefs(matchDataStore);
onMounted(async () => {
  await matchDataStore.fetchTeams();
});

// Debounced search function
const debouncedFetchTeams = debounce(async () => {
  await matchDataStore.fetchTeams(teamsSearch.value.search);
}, 300);


// Работи със статични изображения
// const getImageUrl = (name) =>{
//     const path = new URL(`@/assets/teamLogos`, import.meta.url);
//     if(name == null) return false;
//     return `${path}/${name}`
// }
// Watcher for teamSearch to trigger API call on change
watch(
  () => teamsSearch.value.search,
  async (newSearch) => {
    debouncedFetchTeams();
  }
);
const cards = [
  {
    title: "Шампиони",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/36581/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Соколи",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48531/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Голаджий",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/53501/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Футболистите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Драскачите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/52939/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Звездите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/55994/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Орлите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48090/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Сините",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/10793/optimized_large_thumb_stage.jpg",
  },
];
</script>

<template>
  <div class="base">
        <v-container fluid>
          <v-row justify="center  mt-12">
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
                :width="mobile?'300px':'400px'"
                clearable
                rounded
                v-model="teamsSearch.search"
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-row>
            <v-col v-for="team in teams" :key="team.id" :cols="mobile? 6: 3">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-card
                  v-bind="props" 
                  rounded="shaped" 
                  link 
                  :to="'/teams/' + team.id"
                  >
                  <!-- :src="team.logo || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/36581/optimized_large_thumb_stage.jpg'" -->
                    <v-img
                      :src="team.logo || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/36581/optimized_large_thumb_stage.jpg'"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="300px"
                      cover
                    >
                      <v-divider></v-divider>
                      <div class="text-background" :class="isHovering ? 'full-opacity' : 'half-opacity'">
                        <v-card-title
                          class="text-white card-text"
                          v-text="team.name"
                        ></v-card-title>
                      </div>
                    </v-img>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      
  </div>
</template>

<style lang="sass" scoped>

.text-background
  background-color: #1b1b1b
.full-opacity
  opacity: 0.9
.half-opacity
  opacity: 0.8
.search-field
  opacity: 0.8
.v-input__prepend > .v-icon
  color: red
.card-text
  font-size: small !important



// .v-field__input
//   font-size: small !important
</style>
