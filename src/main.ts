import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './Config/Swagger/swagger';
import { ValidationPipe } from './Common/Pipes/validation.pipes';
import { HttpExceptionFilter } from './Common/Filters/exception.filter';
import * as cookieParser from 'cookie-parser';
/**
 * This is a mian method program execution is started from here
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerModule.setup('api', app, createDocument(app));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  await app.listen(3000);
}
bootstrap();
