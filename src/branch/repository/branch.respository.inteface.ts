import { Branch, Prisma } from '@prisma/client'
import CreateBranchDto from '../dto/create-branch.dto'

export default interface IBranchRepository {
  create(data: CreateBranchDto): Promise<Branch>
  getAll(): Promise<Branch[]>
  getAllByBankId(id: number): Promise<Branch[]>
  getById(id: number): Promise<Branch | null>
  getByName(name: string): Promise<Branch | null>
  getByNameBankId(bankId: number, name: string): Promise<Branch | null>
  update(id: number, data: CreateBranchDto): Promise<Branch>
  delete(id: number): Promise<Branch>
}
