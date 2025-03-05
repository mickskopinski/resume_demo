<template>
  <div class="pb-8">
    <UCard variant="subtle">
      <template #header>
        <div class="text-xl font-semibold">{{ thisJob.title }}</div>
        <div class="pl-2">
          <div>{{ thisJob.company }}</div>
          <div>{{ thisJob.startDate }} to {{ thisJob.endDate }}</div>
          <div>{{ thisJob.location }}</div>
        </div>
      </template>
      <template #default>
        <div class="italic">
          <ul>
            <li
              v-for="(jobdesc, index) in thisJob.description"
              :key="index"
              class="mb-2 ml-4 list-disc"
            >
              {{ jobdesc }}
            </li>
          </ul>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  job: IJob;
}

const props = defineProps<Props>();
const thisJob: Ref<IJob> = ref(props.job);
</script>
