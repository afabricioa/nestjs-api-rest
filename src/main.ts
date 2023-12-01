import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundErrorFilter } from './not-found-error/not-found-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({errorHttpStatusCode: 422})); 
  //é necessario registrar esse pipe de validação 
  //para que o nest reconheça a validação na entrada de dados

  app.useGlobalFilters(new NotFoundErrorFilter());
  await app.listen(3000);
}
bootstrap();
