/*
  Warnings:

  - You are about to drop the column `Category` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Product` table. All the data in the column will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "Category",
DROP COLUMN "image",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[];
