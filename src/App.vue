<script setup>
import { RouterView, useRoute } from "vue-router";
// import { useFirebaseAuth } from 'vuefire'
import AppSideBar from "./components/AppSideBar.vue";
import AppLayout from "./layouts/AppLayout.vue";

const route = useRoute();
// const auth = useFirebaseAuth()
</script>

<template>
  <AppLayout>
    <template v-slot:topbar>
      <AppSideBar />
    </template>
    <template v-slot:content>
      <!-- <div class="test"> -->
      <Suspense class="base">
        <RouterView :key="route.fullPath" />
        <template v-slot:fallback>
          <p>Content not found. Contact your developer for more info.</p>
        </template>
      </Suspense>
      <!-- </div> -->
    </template>
  </AppLayout>
</template>

<style lang="sass" scoped>
// .footer {
//   background-color: rgba(0, 0, 0, 0.5); /* Background color with transparency */
//   background-image: url('https://w0.peakpx.com/wallpaper/4/60/HD-wallpaper-football-field-background-soccer-pitch.jpg'); /* Image URL */
//   background-size: cover; /* Cover the entire footer area with the image */
//   background-position-x: center; /* Center the background image */
//   background-position-y: center; /* Center the background image */
//   color: white; /* Text color */
//   padding: 20px;
//   text-align: center;
// }

// .footer-content {
//   /* Additional styling for your footer content */
// }
.base
    background-image: url("@/assets/background.jpg")
    background-size: cover
    background-position: right

// .test
//     opacity: 0.2
</style>
