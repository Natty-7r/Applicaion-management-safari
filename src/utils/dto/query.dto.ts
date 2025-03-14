import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'
import { IsNumber, IsOptional, Min } from 'class-validator'

export default class QueryDto {
  @ApiProperty({
    type: Number,
    example: 1,
    description: 'The page number to be retrieved',
    required: false,
  })
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  page?: number

  @ApiProperty({
    type: Number,
    example: 10,
    description: 'The number of items to be retrieved per page',
    required: false,
  })
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => Number(value))
  @IsOptional()
  itemsPerPage?: number
}
