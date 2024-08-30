<script setup></script>

<template>
  <v-app class="base">
    <slot name="topbar" />

    <v-main class="d-flex align-center">
      <slot name="content" />
    </v-main>
    <slot name="footer" />
  </v-app>
</template>

<style lang="sass">
  
</style>
