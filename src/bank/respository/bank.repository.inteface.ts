import { Bank, Prisma } from '@prisma/client'

export default interface IBankRepository {
  create(data: Prisma.BankCreateInput): Promise<Bank>
  getAll(): Promise<Bank[]>
  getById(id: number): Promise<Bank | null>
  getByName(name: string): Promise<Bank | null>
  update(id: number, data: Prisma.BankUpdateInput): Promise<Bank>
  delete(id: number): Promise<Bank>
}
