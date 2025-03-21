-- CreateTable
CREATE TABLE "job_comments" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "job_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "company" VARCHAR(100) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "start_date" VARCHAR(50) NOT NULL,
    "end_date" VARCHAR(50) NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill_category" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skill_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "created" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modified" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "job_comments" ADD CONSTRAINT "job_comments_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "skill_category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
