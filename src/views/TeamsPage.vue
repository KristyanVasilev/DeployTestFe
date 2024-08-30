<script setup>
import { ref, computed } from "vue";
import SidebarLayout from "@/layouts/SidebarLayout.vue";
import CafeCard from "@/components/CafeCard.vue";
import BaseCheckbox from "@/components/base/BaseCheckbox.vue";
import BaseContainer from "@/components/base/BaseContainer.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseImage from "@/components/base/BaseImage.vue";
const userSearch = ref({
  search: "",
});
const cards = [
  {
    title: "Шампиони",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/36581/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Соколи",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48531/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Голаджий",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/53501/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Футболистите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48640/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Драскачите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/52939/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Звездите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/55994/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Орлите",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/48090/optimized_large_thumb_stage.jpg",
  },
  {
    title: "Сините",
    src: "https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/10793/optimized_large_thumb_stage.jpg",
  },
];
</script>

<template>
  <SidebarLayout>
    <template v-slot:main>
      <BaseContainer>
        <v-container>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <h2 class="mb-4">Отбори</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="v-col-auto">
              <v-text-field
                :loading="loading"
                prepend-icon="mdi-magnify"
                density="compact"
                label="Потърси отбор"
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
            <v-col v-for="card in cards" :key="card.title" :cols="3">
              <v-hover>
                <template v-slot:default="{ isHovering, props }">
                  <v-card
                  v-bind="props" 
                  rounded="shaped" 
                  link 
                  href="http://localhost:3000/">
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
                          v-text="card.title"
                        ></v-card-title>
                      </div>
                    </v-img>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </BaseContainer>
    </template>
  </SidebarLayout>
</template>

<style lang="sass" scoped>

.text-background
  background-color: #1b1b1b
.full-opacity
  opacity: 0.9
.half-opacity
  opacity: 0.8
</style>
