import type { IJob } from "~~/shared/types/IJob";

export default class JobsApi {
  public async fetchJobs(): Promise<IJob[]> {
    return $fetch(`/api/jobs`, {
      method: "GET",
    });
  }
}
