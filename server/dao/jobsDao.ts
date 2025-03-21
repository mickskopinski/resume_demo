import type { IJob } from "~~/shared/types/IJob";
import { JobsDb } from "../data/db/jobs";

export class JobsDao {
  private jobsDb: JobsDb;

  constructor() {
    this.jobsDb = new JobsDb();
  }

  public async getJobs(): Promise<IJob[]> {
    const jobsArray = this.jobsDb.getJobs();
    return jobsArray;
  }
}
