import { Body, Controller, Get, Post } from '@nestjs/common'
import ApplicationService from './service/application.service'
import {
  CreateApplicationSwaggerDefinition,
  GetApplicationSwaggerDefinition,
} from './decorator/application.swagger.decorato'
import CreateApplicationDto from './dto/create-appliation.dto'

@Controller('application')
export default class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @GetApplicationSwaggerDefinition()
  @Get()
  getApplcations() {
    return this.applicationService.getApplications()
  }

  @CreateApplicationSwaggerDefinition()
  @Post()
  createApplilication(@Body() dto: CreateApplicationDto) {
    return this.applicationService.createApplication(dto)
  }
}
