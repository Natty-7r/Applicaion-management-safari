import { SetMetadata } from '@nestjs/common'

export interface RequiredRule {
  action: string
  module: string
}

export const CHECK_PERMISSION_KEY = 'check_permission'
export const checkPermissions = (...handlers: RequiredRule[]) =>
  SetMetadata(CHECK_PERMISSION_KEY, handlers)
