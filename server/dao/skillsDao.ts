import { type ISkillCategory, ISkillList } from "~~/shared/types/ISkills";
import { skillsListData, skillCategoriesData } from "../data/skillList";

export class SkillsDao {
  public async getSkillLists(): Promise<ISkillList[]> {
    const retArray: ISkillList[] = [];
    const categoryLookupMap = this._mapCatgories(skillCategoriesData);

    const workingSkillsMap = new Map<number, string[]>();
    for (let i = 0; i < skillsListData.length; i++) {
      const thisDataItem = skillsListData[i];

      if (workingSkillsMap.has(thisDataItem.category)) {
        let strArray = workingSkillsMap.get(thisDataItem.category);
        if (strArray === undefined) {
          strArray = [];
        }
        strArray.push(thisDataItem.skill);
      } else {
        workingSkillsMap.set(thisDataItem.category, [thisDataItem.skill]);
      }
    }

    workingSkillsMap.forEach((value, key) => {
      const newList = new ISkillList(categoryLookupMap.get(key) ?? "", value);
      retArray.push(newList);
    });

    return retArray;
  }

  private _mapCatgories(categories: ISkillCategory[]): Map<number, string> {
    const categoryMap = new Map<number, string>();
    for (let i = 0; i < categories.length; i++) {
      const thisCategory = categories[i];
      categoryMap.set(thisCategory.id, thisCategory.category);
    }
    return categoryMap;
  }
}
