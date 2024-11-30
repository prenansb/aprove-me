import { PrismaClient } from '@prisma/client'

module.exports = async () => {
  const prisma = new PrismaClient()

  try {
    await prisma.assignor.deleteMany()
    await prisma.payable.deleteMany()
  } catch (error) {
    console.error('Error resetting tables:', error)
  } finally {
    await prisma.$disconnect()
  }
}
