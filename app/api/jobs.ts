import type { IJob } from "~~/shared/types/IJob";

export default class JobsApi {
  public async fetchJobs(): Promise<IJob[]> {
    return $fetch(`/api/jobs`, {
      method: "GET",
    });
  }

  //   public async fetchChemicalById(
  //     chemicalid: number,
  //   ): Promise<IDbQueryResponse<IChemical>> {
  //     //console.log("we are fetching a single chemical");
  //     return $fetch(`/api/chemicals/${chemicalid}`, {
  //       method: "GET",
  //     });
  //   }
}
