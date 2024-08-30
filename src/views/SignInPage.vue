<script setup>
import { ref } from 'vue'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import { useAuthStore } from '@/stores/authStore.js';
const userInput = ref({
  username: '',
  password: '',
})

async function signIn() {
  const authStore = useAuthStore();
  await authStore.login(userInput.value.username, userInput.value.password);
}
</script>

<template>
  <BaseContainer>
    <h1 class="mb-4">Sign In - admin admin</h1>
    <BaseCard>
      <template v-slot:default>
        <BaseForm>
          <BaseInput
            v-model="userInput.username"
            type="username"
            label="Username"
            required
          />
          <BaseInput
            v-model="userInput.password"
            label="Password"
            type="password"
            required
          />
        </BaseForm>
      </template>
      <template v-slot:actions>
        <BaseButton @click="signIn" variant="tonal" color="success">
          Sign In
        </BaseButton>
      </template>
    </BaseCard>
  </BaseContainer>
</template>

<style></style>
