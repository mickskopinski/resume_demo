<template>
  <div class="m-4">
    <UCard variant="subtle">
      <template #default>
        <div class="italic text-right">{{ dateString }}</div>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const dateString = ref("");

onMounted(() => {
  dateString.value = new Date().toLocaleDateString();
});
</script>
