import { HttpStatus, Injectable } from '@nestjs/common'
import BranchService from 'src/branch/service/branch.service'
import ErrorCustomException from 'src/utils/exception/custom.exception'
import { compareString } from 'src/utils/helpers/string.helper'
import CreateApplicationDto from '../dto/create-appliation.dto'
import ApplicationRepository from '../respository/application.respository'

@Injectable()
export default class ApplicationService {
  constructor(
    private readonly applicationRepository: ApplicationRepository,
    private readonly branchSevice: BranchService,
  ) {}

  async createApplication(dto: CreateApplicationDto) {
    const branch = await this.branchSevice.getBankByName(dto.branchName)
    if (!branch)
      throw new ErrorCustomException(
        'branch not found',
        HttpStatus.NOT_FOUND,
        'bank',
      )
    if (!compareString(branch.name, dto.bankName))
      throw new ErrorCustomException(
        'branch and bank do not match',
        HttpStatus.BAD_REQUEST,
        'bank',
      )
    return this.applicationRepository.create(dto)
  }

  async getApplications() {
    return this.applicationRepository.getAll()
  }
}
