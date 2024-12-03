import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { env } from './infra/config/env'
import { ValidationPipe } from '@nestjs/common'

import * as fs from 'node:fs'
import * as path from 'node:path'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  })

  const config = new DocumentBuilder()
    .setTitle('Nodejs example')
    .setDescription('The nodejs API description')
    .setVersion('1.0')
    .addTag('Node')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('docs', app, document)

  const outputPath = path.join(process.cwd(), 'swagger.json')
  fs.writeFileSync(outputPath, JSON.stringify(document, null, 2))
  console.log(`Swagger JSON file has been generated at ${outputPath}`)

  await app.listen(env.port, '0.0.0.0')
}

bootstrap()
