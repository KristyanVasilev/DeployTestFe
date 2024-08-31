<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify'
import { useAuthStore } from "@/stores/authStore.js";
const authStore = useAuthStore();
const props = defineProps(['drawer'])
const { mobile } = useDisplay()
</script>

<template>
  <v-navigation-drawer v-if="mobile"
    v-model="props.drawer"
    app
    :temporary="mobile"
    :permanent="mobile"
    :width="156"
  >

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Начало"
        value="home"
        to="/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-trophy"
        title="Класиране"
        value="ranking"
        to="/ranking"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-calendar"
        title="Програма"
        value="schedule"
        to="/schedule"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Отбори"
        value="teams"
        to="/teams"
      ></v-list-item>
      <v-list-item
        v-if="authStore.user"
        prepend-icon="mdi-security"
        title="Админ Панел"
        value="admin-panel"
        to="/admin-panel"
      ></v-list-item>
      <v-list-item
        v-if="authStore.user"
        @click="authStore.logout()"
        prepend-icon="mdi-logout"
        title="Изход"
        value="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-navigation-drawer v-else
  expand-on-hover
  rail
  >
    <v-list>
      <v-list-item to="/" prepend-avatar="@/assets/logo.jpeg">MatchPro</v-list-item>
     
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Начало"
        value="home"
        to="/"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-trophy"
        title="Класиране"
        value="ranking"
        to="/ranking"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-calendar"
        title="Програма"
        value="schedule"
        to="/schedule"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Отбори"
        value="teams"
        to="/teams"
      ></v-list-item>
      <v-list-item
        v-if="authStore.user"
        prepend-icon="mdi-security"
        title="Админ Панел"
        value="admin-panel"
        to="/admin-panel"
      ></v-list-item>
      <v-list-item
        v-if="authStore.user"
        @click="authStore.logout()"
        prepend-icon="mdi-logout"
        title="Изход"
        value="logout"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<style scoped>
/* Add any specific styles here */
</style>
