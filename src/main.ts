import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { json } from 'express'
import AppModule from './app.module'
import './instrument'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(json({ limit: '10mb' }))
  app.enableCors()
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  )

  const config = new DocumentBuilder()
    .setTitle('Safari_test-API')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('MApi')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('api', app, document)

  await app.listen(process.env.PORT, () => {})
}
bootstrap()
