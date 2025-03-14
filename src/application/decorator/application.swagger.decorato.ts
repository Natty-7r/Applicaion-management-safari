import { applyDecorators } from '@nestjs/common'
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger'
import ApplicationResponse from '../response/applicaiton.response'

export const GetApplicationSwaggerDefinition = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get list of applications' }),
    ApiOkResponse({
      type: [ApplicationResponse],
      description: 'List of applications retrieved successfully',
    }),
    ApiInternalServerErrorResponse({ description: 'Something went wrong' }),
  )
}

export const CreateApplicationSwaggerDefinition = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Create application' }),
    ApiOkResponse({
      type: [ApplicationResponse],
      description: 'applicaiton created successfully',
    }),
    ApiInternalServerErrorResponse({ description: 'Something went wrong' }),
  )
}

export const GetApplicationDetailSwaggerDefinition = () => {
  return applyDecorators(
    ApiOperation({ summary: 'Get application details by ID' }),
    ApiOkResponse({
      type: ApplicationResponse,
      description: 'Application details retrieved successfully',
    }),
    ApiNotFoundResponse({ description: 'Application not found' }),
    ApiBadRequestResponse({ description: 'Invalid application ID' }),
    ApiInternalServerErrorResponse({ description: 'Something went wrong' }),
  )
}
