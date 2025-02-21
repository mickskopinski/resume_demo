<template>
  <UContainer>
    <AppHeader />
    <slot />
    <AppFooter />
  </UContainer>
</template>

<script lang="ts" setup>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
</script>
