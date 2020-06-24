import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8888);
}
bootstrap()
  .then(() => {

    Logger.log(`Started at http://localhost:8888 🧘`, 'Bootstrap');
  })
  .catch((error: Error) => {
    Logger.error('Unhandled Rejection', error.stack, 'Bootstrap');
  });
