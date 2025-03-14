import { Injectable } from '@nestjs/common'
import { Branch } from '@prisma/client'
import ErrorCustomException from 'src/utils/exception/custom.exception'
import CreateBranchDto from '../dto/create-branch.dto'
import BranchRepository from '../repository/branch.respository'

@Injectable()
export default class BranchService {
  constructor(private readonly branchRepository: BranchRepository) {}

  async create(dto: CreateBranchDto): Promise<Branch | void> {
    const existingBank = await this.branchRepository.getByName(dto.name)
    if (existingBank)
      throw new ErrorCustomException('bank with name exists', 409, 'bank')
    return this.branchRepository.create(dto)
  }

  async getAll(): Promise<Branch[]> {
    return this.branchRepository.getAll()
  }

  async getBankDetail(id: number): Promise<Branch | null> {
    return this.branchRepository.getById(id)
  }
  async getBankByName(name: string): Promise<Branch | null> {
    return this.branchRepository.getByName(name)
  }
}
