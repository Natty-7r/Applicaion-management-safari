import { applyDecorators } from '@nestjs/common'
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'
import BranchResponse from '../responses/branch.response'

export const GetBranchSwaggerDefinition = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get list of brancs' }),
    ApiOkResponse({
      type: [BranchResponse],
      description: 'List of banks retrieved successfully',
    }),
    ApiInternalServerErrorResponse({ description: 'Something went wrong' }),
  )
}
