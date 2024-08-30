<template>
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      style="height: 800px"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
       
      />
  
      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>
    </ol-map>
  </template>
  
  <script setup>
  import { ref } from "vue";
//   https://vue3openlayers.netlify.app/get-started.html
// ol-overlay, ol-source-cluster, ol-style-icon е за слагане на пинчета по мапката
// ol-geolocation е за слагане на пинче на текущото място на потребителя, ако си го е разрешил от настройките
//ol-style-flowline, ol-animation-path за малко самолетче да лети
// мапс контроли
//ol-fullscreen-control, ol-zoom-control
  const center = ref([40, 40]);
//   const projection = ref("EPSG:4326");
  const zoom = ref(8);
  const rotation = ref(0);
  </script>