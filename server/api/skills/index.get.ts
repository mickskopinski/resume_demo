import { SkillsDao } from "~~/server/dao/skillsDao";
import type { ISkillList } from "~~/shared/types/ISkills";

export default defineEventHandler(
  async (event): Promise<ISkillList[] | null> => {
    const dao = new SkillsDao();
    let skillListArray: ISkillList[] | null = null;
    try {
      skillListArray = await dao.getSkillLists();
    } catch (error) {
      console.error("Error fetching skill lists:", error);
    }
    return skillListArray;
  },
);
