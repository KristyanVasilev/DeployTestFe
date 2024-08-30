<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="@/assets/logo.png"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home" title="Начало" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-table" title="Класиране" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-calendar" title="Програма" value="starred"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Отбори" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100%">
        <router-view />
      </v-main>
      <AppFooter />
    </v-layout>
  </v-card>
</template>
<script setup>
  //
</script>
