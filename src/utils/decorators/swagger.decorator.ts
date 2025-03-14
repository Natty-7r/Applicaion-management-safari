import { applyDecorators } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import InternalServerErrorResponseDto from 'src/utils/responses/internal-server-error.response.dto'

const operation = (summary: string) =>
  ApiOperation({
    summary,
  })

const success = (responseType: any) =>
  ApiResponse({ status: 200, type: responseType })

const internalServerError = ApiResponse({
  status: 500,
  type: InternalServerErrorResponseDto,
})

const SWAGGER_DECORATOR = (
  summary: string,
  resposeType: any,
  ...decorators: MethodDecorator[]
) =>
  applyDecorators(
    operation(summary),
    success(resposeType),
    internalServerError,
    ...decorators,
  )

export default SWAGGER_DECORATOR
