import { createParamDecorator, ExecutionContext } from '@nestjs/common'

const USER = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest()
  const { user } = request

  return data ? user?.[data] : user
})

export default USER
