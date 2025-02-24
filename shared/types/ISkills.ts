export interface ISkillCategory {
  id: number;
  category: string;
}

export class ISkillList {
  category: string;
  skills?: string[];

  constructor(category: string, skills: string[] = []) {
    this.category = category;
    this.skills = skills;
  }

  public addSkill(skill: string) {
    if (this.skills === undefined) {
      this.skills = [];
    }
    this.skills.push(skill);
  }
}
