import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { GetBranchSwaggerDefinition } from './decorator/branch.swagger.decorator'
import BranchService from './service/branch.service'

@Controller('')
export default class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @GetBranchSwaggerDefinition()
  @Get('bank/:id/branchs')
  getBranchs(@Param('id', ParseIntPipe) id: number) {
    return this.branchService.getAll()
  }
}
