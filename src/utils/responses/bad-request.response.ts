import { ApiResponseProperty } from '@nestjs/swagger'

export default class BadRequestErrorResponse {
  @ApiResponseProperty({ type: Number, example: 400 })
  statusCode: number

  @ApiResponseProperty({ type: String, example: 'Bad Request' })
  message: string
}
