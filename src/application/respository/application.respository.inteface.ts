import { Application } from '@prisma/client'
import CreateApplicationDto from '../dto/create-appliation.dto'

export default interface IApplicationRepository {
  create(data: CreateApplicationDto): Promise<Application>
  getAll(): Promise<Application[]>
  getById(id: number): Promise<Application | null>
  getByAccountNumber(accountNumber: string): Promise<Application | null>
  update(id: number, data: CreateApplicationDto): Promise<Application>
  delete(id: number): Promise<Application>
}
