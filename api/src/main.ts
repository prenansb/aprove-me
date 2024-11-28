import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { env } from './infra/config/env'
import { BadRequestException, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
      console.log(errors)
      const result = errors.map((error) => ({
        property: error.property,
        message: error.constraints[Object.keys(error.constraints)[0]],
      }));
      return new BadRequestException(result);
    },
    stopAtFirstError: true
  }))

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Allow cookies and other credentials to be sent
  })

  const config = new DocumentBuilder()
    .setTitle('Nodejs example')
    .setDescription('The nodejs API description')
    .setVersion('1.0')
    .addTag('Node')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(env.port, '0.0.0.0')
}

bootstrap()
