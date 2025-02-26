<template>
  <div class="font-sans">
    <div class="flex flex-row pt-4 pb-8">
      <div class="basis-1/4 flex justify-center items-center">
        <NuxtImg src="headshot-2.png" fit="inside" width="100" height="100" />
      </div>
      <div class="basis-3/4 text-sm">
        <UCard variant="soft">
          <template #header>
            <h1 class="text-3xl">Michael Skopinski</h1>
          </template>
          <template #default>
            <div>4842 Oak Ridge Dr.</div>
            <div>Hermantown, MN 55811</div>
            <div>ph: (218) 391-5508</div>
            <div>mail: mskopinski@hotmail.com</div>
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
