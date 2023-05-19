import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT = 5000;
const HOST = 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  Logger.log(`SERVER running on ${HOST} at PORT:${PORT}`);
}
bootstrap();
