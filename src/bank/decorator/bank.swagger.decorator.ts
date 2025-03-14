import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'
import BankDetailResponse from '../responses/bank-detail.response'
import BankResponse from '../responses/bank.response'

export const GetBankSwaggerDefinition = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get list of banks' }),
    ApiOkResponse({
      type: [BankResponse],
      description: 'List of banks retrieved successfully',
    }),
    ApiInternalServerErrorResponse({ description: 'Something went wrong' }),
  )
}

export const GetBankDetailSwaggerDefinition = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get bank details by ID' }),
    ApiOkResponse({
      type: BankDetailResponse,
      description: 'Bank details retrieved successfully',
    }),
    ApiNotFoundResponse({ description: 'Bank not found' }),
    ApiBadRequestResponse({ description: 'Invalid bank ID' }),
    ApiInternalServerErrorResponse({ description: 'Something went wrong' }),
  )
}
