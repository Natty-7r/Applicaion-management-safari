import { ApiProperty } from '@nestjs/swagger'
import BranchResponse from 'src/branch/responses/branch.response'
import BankResponse from './bank.response'

export default class BankDetailResponse extends BankResponse {
  @ApiProperty({
    description: 'List of branches associated with the bank',
    type: [BranchResponse],
  })
  branches: BranchResponse[]
}
