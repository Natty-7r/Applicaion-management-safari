import { Injectable } from '@nestjs/common'
import { Application, Prisma } from '@prisma/client'
import PrismaService from 'src/prisma/prisma.service'
import IApplicationRepository from './application.respository.inteface'
import CreateApplicationDto from '../dto/create-appliation.dto'

@Injectable()
export default class ApplicationRepository implements IApplicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateApplicationDto): Promise<Application> {
    return this.prisma.application.create({ data: dto })
  }

  async getAll(): Promise<Application[]> {
    return this.prisma.application.findMany()
  }

  async getById(id: number): Promise<Application | null> {
    return this.prisma.application.findUnique({
      where: { id },
    })
  }

  async getByAccountNumber(accountNumber: string): Promise<Application | null> {
    return this.prisma.application.findUnique({
      where: { accountNumber },
    })
  }

  async update(
    id: number,
    data: Prisma.ApplicationUpdateInput,
  ): Promise<Application> {
    return this.prisma.application.update({ where: { id }, data })
  }

  async delete(id: number): Promise<Application> {
    return this.prisma.application.update({
      where: { id },
      data: { deletedAt: new Date() },
    })
  }
}
