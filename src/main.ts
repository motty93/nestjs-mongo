import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
// import { LoggerMiddleware } from './common/middleware/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // グローバルにmiddleware登録
  // app.use(LoggerMiddleware)
  const options = new DocumentBuilder()
    .setTitle('Swagger example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('test')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
