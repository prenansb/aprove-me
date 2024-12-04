-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_payable" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "value" REAL NOT NULL,
    "emissionDate" DATETIME NOT NULL,
    "assignorId" TEXT NOT NULL,
    CONSTRAINT "payable_assignorId_fkey" FOREIGN KEY ("assignorId") REFERENCES "assignor" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_payable" ("assignorId", "emissionDate", "id", "value") SELECT "assignorId", "emissionDate", "id", "value" FROM "payable";
DROP TABLE "payable";
ALTER TABLE "new_payable" RENAME TO "payable";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
