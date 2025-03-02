<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">My Experience</h2>
    <p class="mb-4">
      I have been fortunate to have a wide array of experience in application
      development. Here are some of the highlights:
    </p>
    <ul>
      <li v-for="(job, index) in jobArray" :key="index">
        <JobListing :job="job" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { IJob } from "~~/shared/types/IJob";
const { $api } = useNuxtApp();

const thisResp = await $api.jobs.fetchJobs();
const jobArray: Ref<IJob[]> = ref(thisResp);
</script>
