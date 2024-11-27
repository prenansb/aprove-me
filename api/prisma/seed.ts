import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import { join } from 'path';

const prisma = new PrismaClient();

async function main() {
  const sqlPath = join(__dirname, 'seed.sql');
  const sql = readFileSync(sqlPath, 'utf-8');
  const queries = sql.split(';').filter(q => q.trim());

  for (const query of queries) {
    if (query) {
      console.log(query)
      await prisma.$executeRawUnsafe(query);
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
