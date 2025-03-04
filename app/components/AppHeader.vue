<template>
  <div class="font-sans m-4">
    <UCard variant="outline" :ui="outlineUi">
      <template #default>
        <div class="flex flex-row">
          <div class="basis-1/4 flex justify-center items-center">
            <NuxtImg
              src="headshot-2.png"
              fit="inside"
              width="100"
              height="100"
              class="shadow-2xl rounded-full"
            />
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
      </template>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
const outlineUi = {
  body: "sm:p-0 p-0",
};
</script>
