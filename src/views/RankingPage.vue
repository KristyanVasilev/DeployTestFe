<script setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
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
  { key: "form", title: "Форма", sortable: false },
];

const teams = [
  {
    position: "1",
    team: "Red Bulls",
    form: "WWDWW",
    matches: 30,
    wins: 20,
    draws: 6,
    loses: 4,
    goals: "60/20",
    goaldiff: 40,
    points: 66,
  },
  {
    position: "2",
    team: "Blue Hawks",
    form: "WWLLW",
    matches: 30,
    wins: 18,
    draws: 8,
    loses: 4,
    goals: "55/25",
    goaldiff: 30,
    points: 62,
  },
  {
    position: "3",
    team: "Green Lions",
    form: "WDLWW",
    matches: 30,
    wins: 17,
    draws: 7,
    loses: 6,
    goals: "50/30",
    goaldiff: 20,
    points: 58,
  },
  {
    position: "4",
    team: "Yellow Tigers",
    form: "DDWWW",
    matches: 30,
    wins: 16,
    draws: 9,
    loses: 5,
    goals: "48/28",
    goaldiff: 20,
    points: 57,
  },
  {
    position: "5",
    team: "Black Panthers",
    form: "WDWLW",
    matches: 30,
    wins: 16,
    draws: 8,
    loses: 6,
    goals: "45/30",
    goaldiff: 15,
    points: 56,
  },
  {
    position: "6",
    team: "White Wolves",
    form: "WDDWL",
    matches: 30,
    wins: 15,
    draws: 10,
    loses: 5,
    goals: "44/32",
    goaldiff: 12,
    points: 55,
  },
  {
    position: "7",
    team: "Orange Eagles",
    form: "LWWDW",
    matches: 30,
    wins: 15,
    draws: 8,
    loses: 7,
    goals: "40/28",
    goaldiff: 12,
    points: 53,
  },
  {
    position: "8",
    team: "Purple Sharks",
    form: "LLWDW",
    matches: 30,
    wins: 14,
    draws: 10,
    loses: 6,
    goals: "38/30",
    goaldiff: 8,
    points: 52,
  },
  {
    position: "9",
    team: "Silver Foxes",
    form: "DDLDW",
    matches: 30,
    wins: 14,
    draws: 8,
    loses: 8,
    goals: "35/30",
    goaldiff: 5,
    points: 50,
  },
  {
    position: "10",
    team: "Bronze Bears",
    form: "WLLWL",
    matches: 30,
    wins: 13,
    draws: 9,
    loses: 8,
    goals: "33/32",
    goaldiff: 1,
    points: 48,
  },
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
  if (team.position === "1")
    return "background-color: #debd68; color: #1b1b1b; font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";
  if (team.position === "2")
    return "background-color: #d8d8d8; color: #1b1b1b; font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";
  if (team.position === "3")
    return "background-color: #dc7f64; color: #1b1b1b; font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";

  return "font-weight:500; padding: 8px 12px; border-radius: 8px; font-size: 20px;";
};
</script>

<template>
      <div class="base">
        <v-container fluid :class="mobile ? 'px-4':'px-10'">
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="teams"
          >
            <template v-slot:item="{ item }">
              <tr :style="getRowClass(item)">
                <td>
                  <span :style="getPositionClass(item)">{{
                    item.position
                  }}</span>
                </td>
                <td>
                  <span class="d-flex align-center">
                    <img
                      src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg"
                      height="24px"
                      width="24px"
                      class="mr-4"
                    />
                    {{ item.team }}
                  </span>
                </td>
                
                <td>{{ item.matches }}</td>
                <td>{{ item.wins }}</td>
                <td>{{ item.draws }}</td>
                <td>{{ item.loses }}</td>
                <td>{{ item.goals }}</td>
                <td>{{ item.goaldiff }}</td>
                <td>{{ item.points }}</td>
                <td >{{ item.form }}</td>
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
.base

</style>
