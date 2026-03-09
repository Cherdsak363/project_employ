/*
  Warnings:

  - You are about to drop the column `priceMax` on the `art` table. All the data in the column will be lost.
  - You are about to drop the column `priceMin` on the `art` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `art` table. All the data in the column will be lost.
  - Made the column `artistId` on table `art` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `art` DROP FOREIGN KEY `Art_artistId_fkey`;

-- DropIndex
DROP INDEX `Art_createdAt_idx` ON `art`;

-- AlterTable
ALTER TABLE `art` DROP COLUMN `priceMax`,
    DROP COLUMN `priceMin`,
    DROP COLUMN `tags`,
    ADD COLUMN `contact` VARCHAR(191) NULL,
    ADD COLUMN `price` DOUBLE NULL,
    MODIFY `artistId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Art_artistId_createdAt_idx` ON `Art`(`artistId`, `createdAt`);

-- AddForeignKey
ALTER TABLE `Art` ADD CONSTRAINT `Art_artistId_fkey` FOREIGN KEY (`artistId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
