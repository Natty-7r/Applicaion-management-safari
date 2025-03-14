import { IsEnum, IsNotEmpty, IsString, Length, Matches } from 'class-validator'
import { Status } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'

export default class CreateApplicationDto {
  @ApiProperty({
    description: 'The name of the bank',
    example: 'Bank of America',
  })
  @IsString({ message: 'Bank name must be a string' })
  @IsNotEmpty({ message: 'Bank name is required' })
  @Length(1, 255, { message: 'Bank name must be between 1 and 255 characters' })
  bankName: string

  @ApiProperty({
    description: 'The name of the branch',
    example: 'New York Branch',
  })
  @IsString({ message: 'Branch name must be a string' })
  @IsNotEmpty({ message: 'Branch name is required' })
  @Length(1, 255, {
    message: 'Branch name must be between 1 and 255 characters',
  })
  branchName: string

  @ApiProperty({
    description: 'The name of the account holder',
    example: 'John Doe',
  })
  @IsString({ message: 'Account name must be a string' })
  @IsNotEmpty({ message: 'Account name is required' })
  @Length(1, 255, {
    message: 'Account name must be between 1 and 255 characters',
  })
  accountName: string

  @ApiProperty({ description: 'The account number', example: '1234567890' })
  @IsString({ message: 'Account number must be a string' })
  @IsNotEmpty({ message: 'Account number is required' })
  @Length(1, 255, {
    message: 'Account number must be between 1 and 255 characters',
  })
  @Matches(/^\d+$/, { message: 'Account number must contain only numbers' })
  accountNumber: string

  @ApiProperty({
    enum: Status,
    description: 'The status of the application',
    example: Status.Draft,
  })
  @IsEnum(Status, { message: 'Invalid status value' })
  @IsNotEmpty({ message: 'Status is required' })
  status: Status
}
