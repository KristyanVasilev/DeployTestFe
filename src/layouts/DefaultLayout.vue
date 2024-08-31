<template>
  <v-app>
    <!-- App Bar for Mobile -->
    <v-app-bar v-if="mobile" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>MatchPro</v-toolbar-title>
    </v-app-bar>

    <!-- Sidebar -->
    <Sidebar  :drawer="drawer" @update:drawer="drawer = $event" />

    <!-- Main content -->
    <v-main @click.stop="drawer = false">
      <v-container fluid class="container">
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "@/components/navigation/Sidebar.vue";
import { ref } from 'vue';
import { useDisplay } from 'vuetify'
const drawer = ref(false);
const { mobile } = useDisplay()
</script>

<style scoped lang="sass">
/* Add any specific styles here */
.container
  padding: 4px
  
</style>
