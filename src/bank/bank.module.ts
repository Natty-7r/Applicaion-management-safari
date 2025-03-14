import { Module } from '@nestjs/common'
import BankController from './bank.controller'
import BankRepository from './respository/bank.repository'
import BankService from './services/bank.service'

@Module({
  controllers: [BankController],
  providers: [BankService, BankRepository],
})
export default class BankModule {}
