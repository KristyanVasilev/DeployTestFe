<script setup>
import { ref } from 'vue';
import { useAuthStore } from "@/stores/authStore.js";
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()
const authStore = useAuthStore();
const drawer = ref(false);
</script>

<template>
  <v-app>
    <!-- App Bar for Mobile -->
    <v-app-bar
      app
      v-if="mobile"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Navigation</v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      app
      :temporary="mobile"
      :permanent="mobile"
      expand-on-hover
      rail
    >
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
          prepend-icon="mdi-trophy"
          title="Индивидуално класиране"
          value="individual-ranking"
          to="/individual-ranking"
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

   
  </v-app>
</template>


<style scoped>
/* You can add additional custom styles here to handle responsiveness */
</style>
