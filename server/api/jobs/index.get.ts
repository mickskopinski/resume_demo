import { JobsDao } from "~~/server/dao/jobsDao";
import type { IJob } from "~~/shared/types/IJob";

export default defineEventHandler(async (event): Promise<IJob[] | null> => {
  const dao = new JobsDao();
  let jobsArray: IJob[] | null = null;
  try {
    jobsArray = await dao.getJobs();
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
  return jobsArray;
});
