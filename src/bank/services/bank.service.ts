import { Injectable } from '@nestjs/common'
import { Bank } from '@prisma/client'
import ErrorCustomException from 'src/utils/exception/custom.exception'
import CreateBankDto from '../dto/create-bank.dto'
import BankRepository from '../respository/bank.repository'

@Injectable()
export default class BankService {
  constructor(private readonly bankRepository: BankRepository) {}

  async create(dto: CreateBankDto): Promise<Bank | void> {
    const existingBank = await this.bankRepository.getByName(dto.name)
    if (existingBank)
      throw new ErrorCustomException('bank with name exists', 409, 'bank')
    return this.bankRepository.create(dto)
  }

  async getAll(): Promise<Bank[]> {
    return this.bankRepository.getAll()
  }

  async getBankDetail(id: number): Promise<Bank | null> {
    return this.bankRepository.getById(id)
  }
}
