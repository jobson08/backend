/*
  Warnings:

  - Added the required column `description` to the `expense` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "expense" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "income" ADD COLUMN     "description" TEXT NOT NULL;
