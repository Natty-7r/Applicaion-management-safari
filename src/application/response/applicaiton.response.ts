import { ApiProperty } from '@nestjs/swagger'
import { Status } from '@prisma/client'

export default class ApplicationResponse {
  @ApiProperty({
    description: 'The unique identifier of the application',
    example: 1,
  })
  id: number

  @ApiProperty({
    description: 'The name of the bank',
    example: 'Bank of America',
  })
  bankName: string

  @ApiProperty({
    description: 'The name of the branch',
    example: 'New York Branch',
  })
  branchName: string

  @ApiProperty({
    description: 'The name of the account holder',
    example: 'John Doe',
  })
  accountName: string

  @ApiProperty({ description: 'The account number', example: '1234567890' })
  accountNumber: string

  @ApiProperty({
    enum: Status,
    description: 'The status of the application',
    example: Status.Draft,
  })
  status: Status

  @ApiProperty({
    description: 'The date the application was created',
    example: '2023-10-01T12:00:00Z',
  })
  createdAt: Date

  @ApiProperty({
    description: 'The date the application was last updated',
    example: '2023-10-01T12:00:00Z',
  })
  updatedAt: Date

  @ApiProperty({
    description: 'The date the application was deleted (if applicable)',
    example: null,
  })
  deletedAt: Date | null
}
