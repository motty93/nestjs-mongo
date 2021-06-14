import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// import { LoggerMiddleware } from './common/middleware/logger.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // グローバルにmiddleware登録
  // app.use(LoggerMiddleware)
  await app.listen(process.env.PORT || 3000)
}
bootstrap()
