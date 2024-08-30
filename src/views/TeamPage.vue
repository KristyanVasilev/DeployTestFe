<script setup>
import { ref, computed } from "vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import BaseContainer from "@/components/base/BaseContainer.vue";

const userSearch = ref({
  search: "",
});

const cards = [
  {
    id:1,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:2,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:3,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:4,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:5,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:6,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:7,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },
  {
    id:8,
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
      mvp: 5
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
        mvp: 5
      }
    ]
  },

  // Add more players in the same format...
];
  
const selectedPlayer = ref(null);
const isModalOpen = ref(false);

function openModal(player) {
  selectedPlayer.value = player;
  isModalOpen.value = true;
}
</script>
<template>
  <SidebarLayout>
    <template v-slot:main>
      <BaseContainer>
        <v-container>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <h2 class="mb-4">Играчи</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <v-text-field
                :loading="loading"
                prepend-icon="mdi-magnify"
                density="compact"
                label="Потърси играч"
                variant="solo"
                hide-details
                single-line
                width="400px"
                clearable
                rounded
                v-model="userSearch.search"
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-row>
            <v-col v-for="card in cards" :key="card.id" :cols="3">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-card
                  v-bind="props" 
                  rounded="shaped" 
                  link 
                  @click="openModal(card)">
                    <v-img
                      :src="card.src"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="300px"
                      cover
                    >
                      <v-divider></v-divider>
                      <div class="text-background" :class="isHovering ? 'full-opacity' : 'half-opacity'">
                        <v-card-title
                          class="text-white card-text"
                          v-text="`${card.firstName} ${card.lastName}`"
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
              <v-img :src="selectedPlayer.src" height="300px" contain rounded="lg"></v-img>
            </v-col>

            <!-- Personal Information -->
            <v-col class="mt-14" cols="6">
              <div>
                <p><strong>Име:</strong> {{ selectedPlayer.firstName }} {{ selectedPlayer.lastName }}</p>
                <p><strong>Дата на раждане:</strong> {{ selectedPlayer.dateOfBirth.slice(0,10) }}</p>
                <p><strong>Височина:</strong> {{ selectedPlayer.height }} см</p>
                <p><strong>Тегло:</strong> {{ selectedPlayer.weight }} кг</p>
                <p><strong>Номер:</strong> {{ selectedPlayer.number }}</p>
                <p><strong>Активен:</strong> {{ selectedPlayer.isActive ? 'Да' : 'Не' }}</p>
                <p><strong>Позиция:</strong> {{ selectedPlayer.position }}</p>
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
                  <tr v-for="season in selectedPlayer.seasonStats" :key="season.seasonName">
                    <td>
                      <strong>{{ season.seasonName }}</strong><br />
                      {{ season.startDate.slice(0,10) }}<br />
                      {{ season.teamName }}
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
        
      </BaseContainer>
    </template>
  </SidebarLayout>
</template>
<!-- <template>
  <SidebarLayout>
    <template v-slot:main>
      <BaseContainer>
        <v-container>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <h2 class="mb-4">Играчи</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <v-text-field
                :loading="loading"
                prepend-icon="mdi-magnify"
                density="compact"
                label="Потърси играч"
                variant="solo"
                hide-details
                single-line
                width="400px"
                clearable
                rounded
                v-model="userSearch.search"
                @click:append-inner="onClick"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>

        <v-container fluid>
          <v-row>
            <v-col v-for="card in cards" :key="card.firstName" :cols="3">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-card
                  v-bind="props" 
                  rounded="shaped" 
                  link 
                  @click="openModal(key)">
                    <v-img
                      :src="card.src"
                      class="align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="300px"
                      cover
                    >
                      <v-divider></v-divider>
                      <div class="text-background" :class="isHovering ? 'full-opacity' : 'half-opacity'">
                        <v-card-title
                          class="text-white card-text"
                          v-text="`${card.firstName} ${card.lastName}`"
                        ></v-card-title>
                      </div>
                    </v-img>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
        <v-dialog v-model="isModalOpen" max-width="600px">
          <v-card>
            <v-card-title>{{ selectedPlayer.firstName }} {{ selectedPlayer.lastName }}</v-card-title>
            <v-card-subtitle>Позиция: {{ selectedPlayer.position }}</v-card-subtitle>
            <v-card-text>
              <div><strong>Дата на раждане:</strong> {{ selectedPlayer.dateOfBirth }}</div>
              <div><strong>Височина:</strong> {{ selectedPlayer.height }} см</div>
              <div><strong>Тегло:</strong> {{ selectedPlayer.weight }} кг</div>
              <div><strong>Номер:</strong> {{ selectedPlayer.number }}</div>
              <div><strong>Активен:</strong> {{ selectedPlayer.isActive ? 'Да' : 'Не' }}</div>
              <v-divider class="my-2"></v-divider>
              <div><strong>Общо мачове:</strong> {{ selectedPlayer.totalStats.matches }}</div>
              <div><strong>Голове:</strong> {{ selectedPlayer.totalStats.goals }}</div>
              <div><strong>Фалове:</strong> {{ selectedPlayer.totalStats.fouls }}</div>
              <div><strong>Жълти картони:</strong> {{ selectedPlayer.totalStats.yellowCards }}</div>
              <div><strong>Червени картони:</strong> {{ selectedPlayer.totalStats.redCards }}</div>
              <div><strong>MVP:</strong> {{ selectedPlayer.totalStats.mvp }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="isModalOpen = false">Затвори</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </BaseContainer>
    </template>
  </SidebarLayout>
</template> -->

<style lang="sass" scoped>

.text-background
  background-color: #1b1b1b
.full-opacity
  opacity: 0.9
.half-opacity
  opacity: 0.8
</style>
