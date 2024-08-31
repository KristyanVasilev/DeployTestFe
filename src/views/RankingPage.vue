<script setup>
import { useDisplay } from 'vuetify'
import { useMatchDataStore } from '@/stores/matchDataStore.js';
import { storeToRefs } from 'pinia';
const { mobile } = useDisplay();


const matchDataStore = useMatchDataStore();
const { standings } = storeToRefs(matchDataStore);
onMounted(async () => {
  await matchDataStore.fetchSeasonStandings();
  matchDataStore.standings = matchDataStore.standings.map((team, index) => ({
    ...team,
    position: index + 1, // Start positions from 1
  }));
});

const headers = [
  {
    align: "start",
    key: "position",
    sortable: false,
    title: "Позиция",
  },
  { key: "team", title: "Отбор", sortable: false },
 
  { key: "matches", title: "М", sortable: false },
  { key: "wins", title: "П", sortable: false },
  { key: "draws", title: "Р", sortable: false },
  { key: "loses", title: "З", sortable: false },
  { key: "goals", title: "В/Д", sortable: false },
  { key: "goaldiff", title: "Г.Р.", sortable: false },
  { key: "points", title: "Т", sortable: false },
];


const getRowClass = (team) => {
  //if (team.position === "1") return "background-color: #253c59; font-weight:500";
  //if (team.position === "2") return "background-color: #717171; font-weight:500";
  //if (team.position === "3") return "background-color: #2D4B73; font-weight:500";
  return "background-color: #1b1b1b;color: #FFFFFF;font-weight:500";
};
const headerCellStyle = () => {
  return "background-image: url('https://i.blogs.es/865481/heroes-ea-sports/1200_800.jpeg');";
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
      <div class="base d-flex align-center justify-center">
        <v-container fluid :class="mobile ? 'px-4':'px-16'" >
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="standings"
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
                      :src="item.teamLogo || 'https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg'"
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    <router-link class="team-name" :to="'/teams/' + item.teamId">{{ item.teamName }}</router-link >
                  </span>
                </td>
                <td>{{ item.matches }}</td>
                <td>{{ item.wonMatches }}</td>
                <td>{{ item.drawMatches }}</td>
                <td>{{ item.lostMatches }}</td>
                <td>{{ item.scoredGoals + '/' +  item.considedGoals }}</td>
                <td>{{ item.goalDifference }}</td>
                <td>{{ item.points }}</td>
               
              </tr>
            </template>
          </v-data-table>
        </v-container>
 
    </div>

</template>

<style scoped lang="sass">
.v-table
  background-color: #253C59 !important
  opacity: 0.8
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

</style>
