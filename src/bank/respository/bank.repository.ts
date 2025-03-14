import { Injectable } from '@nestjs/common'
import { Bank, Prisma } from '@prisma/client'
import PrismaService from 'src/prisma/prisma.service'
import CreateBankDto from '../dto/create-bank.dto'
import IBankRepository from './bank.repository.inteface'

@Injectable()
export default class BankRepository implements IBankRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBankDto): Promise<Bank> {
    return this.prisma.bank.create({ data: dto })
  }

  async getAll(): Promise<Bank[]> {
    return this.prisma.bank.findMany()
  }

  async getById(id: number): Promise<Bank | null> {
    return this.prisma.bank.findUnique({
      where: { id },
      include: { branches: true },
    })
  }
  async getByName(name: string): Promise<Bank | null> {
    return this.prisma.bank.findFirst({
      where: { name: { equals: name.trim(), mode: 'insensitive' } },
    })
  }

  async update(id: number, data: Prisma.BankUpdateInput): Promise<Bank> {
    return this.prisma.bank.update({ where: { id }, data })
  }

  async delete(id: number): Promise<Bank> {
    return this.prisma.bank.update({
      where: { id },
      data: { deletedAt: new Date() },
    })
  }
}
