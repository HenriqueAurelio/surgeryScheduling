/*
  Warnings:

  - You are about to alter the column `generalObservations` on the `surgeryRequests` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Added the required column `procedureId` to the `surgeryRequests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "surgeryRequests" ADD COLUMN     "procedureId" TEXT NOT NULL,
ALTER COLUMN "generalObservations" SET DATA TYPE VARCHAR(100);

-- CreateTable
CREATE TABLE "procedures" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "procedures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "procedures_id_key" ON "procedures"("id");

-- AddForeignKey
ALTER TABLE "surgeryRequests" ADD CONSTRAINT "surgeryRequests_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "procedures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
