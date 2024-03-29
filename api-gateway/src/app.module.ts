import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthV1Module } from './modules/v1/auth-v1/auth-v1.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthV1Module
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
