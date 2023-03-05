/*
  Warnings:

  - You are about to drop the column `type` on the `acconunt` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `category` table. All the data in the column will be lost.
  - Added the required column `typeAccount` to the `acconunt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeService` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "acconunt" DROP COLUMN "type",
ADD COLUMN     "typeAccount" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "category" DROP COLUMN "type",
ADD COLUMN     "typeService" BIGINT NOT NULL;
