import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db-auth',
      port: 3306,
      username: 'user', // Asegúrate de que este sea el usuario que creaste
      password: '1234', // Usa la contraseña que definiste para tu usuario de MySQL
      database: 'db-auth', // Nombre de la base de datos que especificaste
      entities: [], // Especifica tus entidades aquí
      synchronize: true, // Ten cuidado con esta opción en producción
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
