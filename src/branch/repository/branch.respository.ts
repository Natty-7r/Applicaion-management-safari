import { Injectable } from '@nestjs/common'
import { Branch, Prisma } from '@prisma/client'
import PrismaService from 'src/prisma/prisma.service'
import CreateBranchDto from '../dto/create-branch.dto'
import IBranchRepository from './branch.respository.inteface'

@Injectable()
export default class BranchRepository implements IBranchRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBranchDto): Promise<Branch> {
    return this.prisma.branch.create({ data: dto })
  }

  async getAll(): Promise<Branch[]> {
    return this.prisma.branch.findMany()
  }
  async getAllByBankId(bankId: number): Promise<Branch[]> {
    return this.prisma.branch.findMany({ where: { bankId } })
  }

  async getById(id: number): Promise<Branch | null> {
    return this.prisma.branch.findUnique({
      where: { id },
    })
  }

  async getByName(name: string): Promise<Branch | null> {
    return this.prisma.branch.findFirst({
      where: { name: { equals: name.trim(), mode: 'insensitive' } },
    })
  }
  async getByNameBankId(bankId: number, name: string): Promise<Branch | null> {
    return this.prisma.branch.findFirst({
      where: { name: { equals: name.trim(), mode: 'insensitive' }, bankId },
    })
  }

  async update(id: number, data: Prisma.BranchUpdateInput): Promise<Branch> {
    return this.prisma.branch.update({ where: { id }, data })
  }

  async delete(id: number): Promise<Branch> {
    return this.prisma.branch.update({
      where: { id },
      data: { deletedAt: new Date() },
    })
  }
}
