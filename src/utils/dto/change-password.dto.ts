import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export default class ChangePasswordDto {
  @ApiProperty({
    type: String,
    example: 'Pa$$$w0rd##',
    description: 'The old password of the user',
  })
  @IsString()
  @IsNotEmpty()
  oldPassword: string

  @ApiProperty({
    type: String,
    example: '12345',
    description: 'The new password of the user',
  })
  @IsString()
  @IsNotEmpty()
  newPassword: string

  @ApiProperty({
    type: String,
    example: '12345',
    description: 'The new password of the user',
  })
  @IsString()
  @IsNotEmpty()
  confirmPassword: string
}
