<template>
  <UContainer>
    <AppHeader />
    <UNavigationMenu
      :items="items"
      class="w-full justify-center pb-4"
      color="neutral"
      variant="pill"
      highlight
      highlight-color="primary"
      orientation="horizontal"
    />
    <slot />
    <AppFooter />
  </UContainer>
</template>

<script lang="ts" setup>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

const items = ref([
  {
    label: "Home",
    description: "Home",
    icon: "heroicons:home",
    to: "/",
  },
  {
    label: "About",
    description: "About me",
    icon: "heroicons:user-circle",
    to: "/about",
  },
  {
    label: "Skills",
    description: "My skills",
    icon: "heroicons:wrench-screwdriver",
    to: "/skills",
  },
  {
    label: "Education",
    description: "My education",
    icon: "heroicons:academic-cap",
    to: "/education",
  },
  {
    label: "Experience",
    description: "My experience",
    icon: "heroicons:building-office-2",
    to: "/experience",
  },
]);
</script>
