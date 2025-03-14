import { PickType } from '@nestjs/swagger'
import ChangePasswordDto from './change-password.dto'

export default class ResetPasswordDto extends PickType(ChangePasswordDto, [
  'newPassword',
  'confirmPassword',
] as const) {}
