import { createParamDecorator, ExecutionContext } from '@nestjs/common'

const ADMIN = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const { user } = request

  return data ? user?.[data] : user
})

export default ADMIN
