import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class AppService {

  getHello(): string {
    console.log("cae en el endpoint test ");
    
    return 'Hola desde el microservicio auth';
  }
}
