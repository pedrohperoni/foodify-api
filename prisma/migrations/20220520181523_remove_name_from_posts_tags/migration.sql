/*
  Warnings:

  - You are about to drop the column `name` on the `postsTags` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "postsTags_name_key";

-- AlterTable
ALTER TABLE "postsTags" DROP COLUMN "name";
