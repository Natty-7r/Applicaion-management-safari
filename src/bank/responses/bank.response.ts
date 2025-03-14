import { ApiProperty } from '@nestjs/swagger'

export default class BankResponse {
  @ApiProperty({ description: 'The unique identifier of the bank', example: 1 })
  id: number

  @ApiProperty({
    description: 'The name of the bank',
    example: 'Bank of America',
  })
  name: string

  @ApiProperty({
    description: 'The date the bank was created',
    example: '2023-10-01T12:00:00Z',
  })
  createdAt: Date

  @ApiProperty({
    description: 'The date the bank was last updated',
    example: '2023-10-01T12:00:00Z',
  })
  updatedAt: Date

  @ApiProperty({
    description: 'The date the bank was deleted (if applicable)',
    example: null,
  })
  deletedAt: Date | null
}
