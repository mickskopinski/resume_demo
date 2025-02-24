<template>
  <div class="pb-8">
    <div>
      <span class="text-xl">{{ thisJob.title }}</span> at
      {{ thisJob.company }}
    </div>
    <div class="pl-2">{{ thisJob.startDate }} to {{ thisJob.endDate }}</div>
    <div class="pl-2">{{ thisJob.location }}</div>
    <div class="pl-4 pt-2 italic">
      <ul>
        <li v-for="(jobdesc, index) in thisJob.description" :key="index">
          - {{ jobdesc }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  job: IJob;
}

const props = defineProps<Props>();
const thisJob: Ref<IJob> = ref(props.job);
</script>
