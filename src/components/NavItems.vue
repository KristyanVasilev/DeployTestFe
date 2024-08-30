<script setup>
import BaseButton from "./base/BaseButton.vue";
import { useAuthStore } from "@/stores/authStore.js";
const authStore = useAuthStore();
</script>

<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item to="/" prepend-avatar="@/assets/logo.png"></v-list-item>
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

<style></style>
