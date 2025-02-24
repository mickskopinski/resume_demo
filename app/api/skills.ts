import type { ISkillList } from "~~/shared/types/ISkills";

export default class SkillsApi {
  public async fetchSkillLists(): Promise<ISkillList[]> {
    return $fetch(`/api/skills`, {
      method: "GET",
    });
  }
}
