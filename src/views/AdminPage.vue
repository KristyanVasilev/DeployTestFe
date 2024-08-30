<script setup>
import { ref, computed } from 'vue'
import SidebarLayout from '@/layouts/SidebarLayout.vue'
import BaseCheckbox from '@/components/base/BaseCheckbox.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import BaseImage from '@/components/base/BaseImage.vue'

// const mapImage = computed(() => {
//   return `/images/world map.jpg`
// })
</script>

<template>
  <SidebarLayout>
    <template v-slot:main>
      <BaseContainer>
        <h2 class="mb-4">ADmin</h2>
      </BaseContainer>
    </template>
   </SidebarLayout>
</template>

<style></style>
