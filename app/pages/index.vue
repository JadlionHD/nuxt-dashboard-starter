<script setup lang="ts">
import { authClient } from "~/lib/auth-client";
const runtimeConfig = useRuntimeConfig();

const session = await authClient.useSession(useFetch);
console.log(session.data);
</script>

<template>
  <UContainer>
    <div v-if="!session.isPending">
      <div v-if="!session?.data.value">
        <div>Hello there user! try login/register</div>
        <div class="flex items-center gap-2">
          <UButton to="/login" variant="outline">Login</UButton>
          <UButton to="/register">Register</UButton>
        </div>
      </div>
      <div v-else>
        <div>You logged in! Welcome {{ session.data }}</div>
      </div>
    </div>
  </UContainer>
</template>
