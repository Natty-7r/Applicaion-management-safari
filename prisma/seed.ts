import { banks, cities } from './seed-data'

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  try {
    // Create banks
    for (const bank of banks) {
      const createdBank = await prisma.bank.create({
        data: {
          name: bank.value,
        },
      })

      for (const city of cities) {
        await prisma.branch.create({
          data: {
            name: `${bank.value} - ${city}`,
            bankId: createdBank.id,
          },
        })
      }
    }
  } catch (error) {
    console.error('Error seeding data:', error)
  } finally {
    await prisma.$disconnect()
  }
}

seed()
