import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT);
    console.log("============================================================");
    console.log(`App Api-gateway (HTTP) Running ${process.env.HOST}:${process.env.PORT} `);
    console.log("============================================================");
  } catch (error) {
    console.log("============================================================");
    console.log(`ERROR App Api-gateway jeje: ${error.message} `);
    console.log("============================================================");
  }
}
bootstrap();
