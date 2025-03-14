import { ApiProperty } from '@nestjs/swagger'

export default class BranchResponse {
  @ApiProperty({
    description: 'The unique identifier of the branch',
    example: 1,
  })
  id: number

  @ApiProperty({
    description: 'The name of the branch',
    example: 'New York Branch',
  })
  name: string

  @ApiProperty({
    description: 'The ID of the bank this branch belongs to',
    example: 1,
  })
  bankId: number

  @ApiProperty({
    description: 'The date the branch was created',
    example: '2023-10-01T12:00:00Z',
  })
  createdAt: Date

  @ApiProperty({
    description: 'The date the branch was last updated',
    example: '2023-10-01T12:00:00Z',
  })
  updatedAt: Date

  @ApiProperty({
    description: 'The date the branch was deleted (if applicable)',
    example: null,
  })
  deletedAt: Date | null
}
