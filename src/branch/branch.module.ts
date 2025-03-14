import { Module } from '@nestjs/common'
import BranchController from './branch.controller'
import BranchRepository from './repository/branch.respository'
import BranchService from './service/branch.service'

@Module({
  controllers: [BranchController],
  providers: [BranchService, BranchRepository],
  exports: [BranchService],
})
export default class BranchModule {}
