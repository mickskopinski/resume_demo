<template>
  <div class="pb-8">
    <div class="text-xl">{{ thisSkillList.category }}</div>
    <div class="pl-4 pt-2 italic">
      <span v-for="(skill, index) in thisSkillList.skills" :key="index">
        {{ index > 0 ? ", " : "" }}{{ skill }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ISkillList } from "~~/shared/types/ISkills";

interface Props {
  skillList: ISkillList;
}

const props = defineProps<Props>();
const thisSkillList: Ref<ISkillList> = ref(props.skillList);
</script>
