<template>
  <div class="pl-16 pb-8">
    <h2 class="text-2xl font-bold mb-4">My Skills</h2>
    <p class="mb-4">
      The following is a list of the technologies I have used in the course of
      my career:
    </p>
    <UTable :data="skillsArray" :columns="columns" class="flex-1" />
  </div>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import type { ISkillList } from "~~/shared/types/ISkills";
const { $api } = useNuxtApp();

const thisResp = await $api.skills.fetchSkillLists();
const skillsArray: Ref<ISkillList[]> = ref(thisResp);

const columns: TableColumn<ISkillList>[] = [
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => row.getValue("category"),
  },
  {
    accessorKey: "skills",
    header: "Skills",
    cell: ({ row }) => {
      const skillsAry: string[] = row.getValue("skills");
      if (skillsAry && skillsAry !== undefined) {
        return skillsAry.join(", ");
      } else {
        return "";
      }
    },
  },
];
</script>
