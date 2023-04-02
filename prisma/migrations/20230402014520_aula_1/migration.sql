-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "salary" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "new_job" BOOLEAN NOT NULL,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);
