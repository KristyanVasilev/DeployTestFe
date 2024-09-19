<script setup>
import { ref, computed } from "vue";
import { useMatchDataStore } from "@/stores/matchDataStore.js";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
const route = useRoute();

const matchDataStore = useMatchDataStore();
const { players, team } = storeToRefs(matchDataStore);
onMounted(async () => {
  await matchDataStore.fetchInfoForTeam(route.params.id);
  await matchDataStore.fetchPlayersForTeam(route.params.id);
});

const cards = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Иванов",
    matchProIndex: 0,
    dateOfBirth: "1990-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Нападател",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/origi-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 2,
    firstName: "Петър",
    lastName: "Василев",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/origi-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 3,
    firstName: "Кристиян",
    lastName: "Василев",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/Georginio-Wijnaldum-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 4,
    firstName: "Борис",
    lastName: "Борисов",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/Georginio-Wijnaldum-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 5,
    firstName: "Васил",
    lastName: "Василев",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/Roberto-Firmino-1-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 6,
    firstName: "Мартин",
    lastName: "Мартинов",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/Joe-Gomez-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 7,
    firstName: "Кристиян",
    lastName: "Василев",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/Joe-Gomez-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },
  {
    id: 8,
    firstName: "Петър",
    lastName: "Петров",
    matchProIndex: 0,
    dateOfBirth: "2022-02-17T13:20:45.461",
    height: 180,
    weight: 75,
    number: 10,
    isActive: true,
    position: "Forward",
    src: "https://max-themes.net/demos/bigslam/soccer1/upload/salah-300x300.jpg",
    totalStats: {
      matches: 20,
      goals: 15,
      fouls: 5,
      yellowCards: 2,
      redCards: 0,
      ownGoals: 0,
      mvp: 5,
    },
    seasonStats: [
      {
        seasonName: "Сезон 1",
        startDate: "2022-08-01T00:00:00",
        teamName: "Марек",
        matches: 20,
        goals: 15,
        fouls: 5,
        yellowCards: 2,
        redCards: 0,
        ownGoals: 0,
        mvp: 5,
      },
    ],
  },

  // Add more players in the same format...
];

const selectedPlayer = ref(null);
const isModalOpen = ref(false);
function openModal(player) {
  selectedPlayer.value = player;
  isModalOpen.value = true;
}
function checkPosition(postionNumber) {
  switch (postionNumber) {
    case 1:
      return "Вратар";
      break;
    case 2:
      return "Защитник";
      break;
    case 3:
      return "Халф";
      break;
    case 4:
      return "Нападател";
      break;
    default:
      return "Халф";
      break;
  }
}
</script>
<template>
  <div class="base">
    <v-container fluid>
      <v-card max-width="800px" class="mx-auto team-card">
        <v-container fluid>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <h1 :class="mobile ? '' : 'mb-4'">{{ team.name }}</h1>
            </v-col>
          </v-row>
          <v-row>
            <!-- Player Photo -->
            <v-col cols="6">
              <v-img
                :src="team.logo"
                height="300px"
                contain
                rounded="lg"
              ></v-img>
            </v-col>

            <!-- Personal Information -->
            <v-col class="" cols="6">
              <div>
                <p><strong>Президент:</strong> {{ team.president }}</p>
                <p><strong>Дата на създаване:</strong> {{ team.createdOn }}</p>
                <p v-if="team.champion > 0">
                  <strong>Титли:</strong> {{ team.champion }}
                </p>
                <br />
                <p><strong>Мачове:</strong> {{ team.totalStats?.matches }}</p>
                <p>
                  <strong>Вкарани голове:</strong>
                  {{ team.totalStats?.scoredGoals }}
                </p>
                <p>
                  <strong>Допуснати голове:</strong>
                  {{ team.totalStats?.considedGoals }}
                </p>
                <p>
                  <strong>Жълти картони:</strong>
                  {{ team.totalStats?.yellowCards }}
                </p>
                <p>
                  <strong>Червени картони:</strong>
                  {{ team.totalStats?.redCards }}
                </p>
              </div>
            </v-col>
          </v-row></v-container
        >
      </v-card>
    </v-container>
    <v-container fluid>
      <v-row>
        <v-col
          v-for="player in players"
          :key="player.id"
          :cols="mobile ? 6 : 3"
        >
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                rounded="shaped"
                link
                @click="openModal(player)"
              >
                <v-img
                  :src="player.url"
                  class="align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                  cover
                >
                  <v-divider></v-divider>
                  <div
                    class="text-background"
                    :class="isHovering ? 'full-opacity' : 'half-opacity'"
                  >
                    <v-card-title
                      class="text-white card-text"
                      v-text="`${player.firstName} ${player.lastName}`"
                    ></v-card-title>
                  </div>
                </v-img>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="isModalOpen" max-width="800px">
      <v-card>
        <!-- First Row: Player Photo and Personal Information -->
        <v-container fluid>
          <v-row>
            <!-- Player Photo -->
            <v-col cols="6">
              <v-img
                :src="selectedPlayer.url"
                height="300px"
                contain
                rounded="lg"
              ></v-img>
            </v-col>

            <!-- Personal Information -->
            <v-col class="mt-14" cols="6">
              <!-- Close Button -->
              <v-btn icon class="close-btn" @click="isModalOpen = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <div>
                <p>
                  <strong>Име:</strong> {{ selectedPlayer.firstName }}
                  {{ selectedPlayer.lastName }}
                </p>
                <p>
                  <strong>Възраст:</strong>
                  {{ selectedPlayer.age == null ? "Н/И" : selectedPlayer.age }}
                </p>
                <p>
                  <strong>Височина:</strong>
                  {{
                    selectedPlayer.height > 230 ? "Н/И" : selectedPlayer.height
                  }}
                  см
                </p>
                <p>
                  <strong>Тегло:</strong>
                  {{
                    selectedPlayer.weight > 178 ? "Н/И" : selectedPlayer.weight
                  }}
                  кг
                </p>
                <p><strong>Номер:</strong> {{ selectedPlayer.number }}</p>
                <p>
                  <strong>Активен:</strong>
                  {{ selectedPlayer.isActive ? "Да" : "Не" }}
                </p>
                <p>
                  <strong>Позиция:</strong>
                  {{ checkPosition(selectedPlayer.position) }}
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>

        <!-- Second Row: Stats Table -->
        <v-container fluid>
          <v-row>
            <v-col>
              <v-table>
                <thead>
                  <tr>
                    <th width="130px">Сезон</th>
                    <th>Мачове</th>
                    <th>Голове</th>
                    <th>Фалове</th>
                    <th>Жълти Картони</th>
                    <th>Червени Картони</th>
                    <th>Автоголове</th>
                    <th>MVP</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Total Stats Row -->
                  <tr>
                    <td>Общо</td>
                    <td>{{ selectedPlayer.totalStats.matches }}</td>
                    <td>{{ selectedPlayer.totalStats.goals }}</td>
                    <td>{{ selectedPlayer.totalStats.fouls }}</td>
                    <td>{{ selectedPlayer.totalStats.yellowCards }}</td>
                    <td>{{ selectedPlayer.totalStats.redCards }}</td>
                    <td>{{ selectedPlayer.totalStats.ownGoals }}</td>
                    <td>{{ selectedPlayer.totalStats.mvp }}</td>
                  </tr>
                  <!-- Season Stats Rows -->
                  <tr
                    v-for="season in selectedPlayer.seasonStats"
                    :key="season.seasonName"
                  >
                    <td>
                      <strong>{{ season.seasonName }}</strong
                      ><br />
                      {{ season.startDate.slice(0, 10) }}<br />
                    </td>
                    <td>{{ season.matches }}</td>
                    <td>{{ season.goals }}</td>
                    <td>{{ season.fouls }}</td>
                    <td>{{ season.yellowCards }}</td>
                    <td>{{ season.redCards }}</td>
                    <td>{{ season.ownGoals }}</td>
                    <td>{{ season.mvp }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="sass" scoped>

.text-background
  background-color: #1b1b1b
.full-opacity
  opacity: 0.9
.half-opacity
  opacity: 0.8

.team-card
  background-color: #1b1b1b
  color: #FFFFFF
  font-weight:500
  opacity: 0.8

.card-text
  font-size: small !important

.close-btn
  position: absolute
  top: 10px
  right: 10px
  z-index: 10
</style>
