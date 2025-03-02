<template>
  <div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
      <template v-for="thisCategory in categories" :key="thisCategory.name">
        <UCard variant="subtle">
          <template #header>
            <a :href="`${thisCategory.link}`">
              <div class="flex items-center gap-2">
                <UIcon :name="thisCategory.icon" class="size-6" />
                <span class="text-lg">{{ thisCategory.name }}</span>
              </div>
            </a>
          </template>
          <template #default>
            <div class="italic">
              <span>{{ thisCategory.description }}</span>
              <ULink
                :to="`${thisCategory.link}`"
                class="text-info-500 hover:text-info-700 ml-2"
                >[ more... ]</ULink
              >
            </div>
          </template>
        </UCard>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface ICategory {
  name: string;
  icon: string;
  description: string;
  link: string;
}

const categories: ICategory[] = [
  {
    name: "About",
    icon: "heroicons:user-circle",
    description:
      "My name is Michael Skopinski, and I am an Application Developer with 25 years of experience.",
    link: "/about",
  },
  {
    name: "Skills",
    icon: "heroicons:wrench-screwdriver",
    description:
      "I have learned a variety of programming languages and methodologies, and am always looking to improve my knowledge. I am currently mostly developing with Vue and Typescript.",
    link: "/skills",
  },
  {
    name: "Education",
    icon: "heroicons:academic-cap",
    description:
      "I studied Mathematics at Penn State University, and during the course of my education learned how to program. Jumping into software development was a logical next step.",
    link: "/education",
  },
  {
    name: "Experience",
    icon: "heroicons:building-office-2",
    description:
      "I have been fortunate to have such diverse experiences in my professional life. Learning a business and field and understanding the needs of colleagues is a critical part of being a successful developer.",
    link: "/experience",
  },
];
</script>
