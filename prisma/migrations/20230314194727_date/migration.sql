/*
  Warnings:

  - Made the column `icomeDate` on table `income` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "expense" ALTER COLUMN "expenseDate" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "income" ALTER COLUMN "icomeDate" SET NOT NULL,
ALTER COLUMN "icomeDate" SET DATA TYPE DATE;
