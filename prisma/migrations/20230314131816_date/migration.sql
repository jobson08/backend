/*
  Warnings:

  - Made the column `expenseDate` on table `expense` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `income` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "expense" ALTER COLUMN "expenseDate" SET NOT NULL;

-- AlterTable
ALTER TABLE "income" ALTER COLUMN "description" SET NOT NULL;
