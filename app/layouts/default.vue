<template>
  <UContainer>
    <AppHeader />
    <UNavigationMenu
      :items="items"
      class="w-full justify-center pb-4"
      :color="'info'"
      :variant="'pill'"
      orientation="horizontal"
    />
    <div class="pl-8 pr-8 pb-8">
      <slot />
    </div>
    <AppFooter />
  </UContainer>
</template>

<script lang="ts" setup>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

const items = ref([
  {
    label: "Home",
    icon: "heroicons:home",
    to: "/",
  },
  {
    label: "About",
    icon: "heroicons:user-circle",
    to: "/about",
  },
  {
    label: "Skills",
    icon: "heroicons:wrench-screwdriver",
    to: "/skills",
  },
  {
    label: "Education",
    icon: "heroicons:academic-cap",
    to: "/education",
  },
  {
    label: "Experience",
    icon: "heroicons:building-office-2",
    to: "/experience",
  },
]);
</script>
