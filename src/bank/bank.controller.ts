import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import BankService from './services/bank.service'
import {
  GetBankDetailSwaggerDefinition,
  GetBankSwaggerDefinition,
} from './decorator/bank.swagger.decorator'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Banks')
@Controller('bank')
export default class BankController {
  constructor(private readonly bankService: BankService) {}

  @GetBankSwaggerDefinition()
  @Get()
  getBanks() {
    return this.bankService.getAll()
  }

  @GetBankDetailSwaggerDefinition()
  @Get('/:id')
  getBankDetail(@Param('id', ParseIntPipe) id: number) {
    return this.bankService.getBankDetail(id)
  }
}
