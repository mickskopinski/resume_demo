/* eslint-disable prettier/prettier */
import prisma from "~~/server/utils/prisma";

export class JobsDb {
  public async getJobs(): Promise<IJob[]> {
    let jobs: IJob[] = [];
    try {
      jobs = await prisma.jobs.findMany();

      if (jobs) {
        for (let i = 0; i < jobs.length; i++) {
          const thisJob = jobs[i];
          const comments = await this.getJobComments(thisJob.id);
          thisJob.description = comments;
        }
      }

      await prisma.$disconnect();
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
    return jobs;
  }

  public async getJobComments(jobId: number): Promise<string[]> {
    const retComments: string[] = [];
    try {
      const comments = await prisma.job_comments.findMany({
        where: {
          job_id: jobId,
        },
      });

      if (comments) {
        for (let i = 0; i < comments.length; i++) {
          retComments.push(comments[i].comment);
        }
      }
      await prisma.$disconnect();
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
    return retComments;
  }
}
