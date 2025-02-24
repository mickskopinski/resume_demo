import JobsApi from "~/api/jobs";
import SkillsApi from "~/api/skills";

interface IApiInstance {
  jobs: JobsApi;
  skills: SkillsApi;
}

export default defineNuxtPlugin(() => {
  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    jobs: new JobsApi(),
    skills: new SkillsApi(),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
