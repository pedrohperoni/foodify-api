/*
  Warnings:

  - Added the required column `backgroundUrl` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileUrl` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "backgroundUrl" TEXT NOT NULL,
ADD COLUMN     "profileUrl" TEXT NOT NULL;
