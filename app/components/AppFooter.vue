<template>
  <UCard variant="soft">
    <template #default>
      <div class="italic text-right">{{ dateString }}</div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const dateString = ref("");

onMounted(() => {
  dateString.value = new Date().toLocaleDateString();
});
</script>
