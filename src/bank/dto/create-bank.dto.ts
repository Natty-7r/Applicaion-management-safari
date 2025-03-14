import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNotEmpty } from 'class-validator'

export default class CreateBankDto {
  @ApiProperty({
    type: String,
    example: 'Commercial Bank of Ethiopia',
    description: 'The name of the bank',
  })
  @IsString()
  @IsNotEmpty()
  name: string
}
