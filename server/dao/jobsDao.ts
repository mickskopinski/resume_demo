import type { IJob } from "~~/shared/types/IJob";
import { jobsList } from "../data/jobsList";

export class JobsDao {
  public async getJobs(): Promise<IJob[]> {
    const jobsArray: IJob[] = [];
    for (let i = 0; i < jobsList.length; i++) {
      const thisItem = jobsList[i];
      const newJob: IJob = {
        id: Number(thisItem.id),
        title: thisItem.title,
        company: thisItem.company,
        location: thisItem.location,
        startDate: thisItem.startDate,
        endDate: thisItem.endDate,
        description: thisItem.descArray,
      };
      jobsArray.push(newJob)
    }
    return jobsArray;
  }
}
