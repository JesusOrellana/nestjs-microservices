import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  try {

    const appContext = await NestFactory.createApplicationContext(AppModule);
    const configService = appContext.get(ConfigService);

    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule, {
      transport: Transport.TCP,
      options: {
        host: configService.get<string>('HOST'), 
        port: +configService.get<number>('PORT')
      }
    });
    await app.listen();

    console.log("============================================================");
    console.log(`App Auth (TCP) Running in ${configService.get<string>('HOST')}:${configService.get<number>('PORT')} `);
    console.log("============================================================");
  } catch (error) {
    console.log("============================================================");
    console.log(`ERROR App Auth: ${error.message} `);
    console.log("============================================================");
  }
}
bootstrap();