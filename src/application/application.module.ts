import { Module } from '@nestjs/common'
import ApplicationService from './service/application.service'
import ApplicationController from './application.controller'
import ApplicationRepository from './respository/application.respository'
import BranchModule from 'src/branch/branch.module'

@Module({
  imports: [BranchModule],
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationRepository],
})
export default class ApplicationModule {}
