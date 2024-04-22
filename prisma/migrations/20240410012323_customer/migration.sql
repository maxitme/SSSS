/*
  Warnings:

  - You are about to drop the column `name` on the `Customer` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Customer_email_key";

-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "name",
ALTER COLUMN "birthDate" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
