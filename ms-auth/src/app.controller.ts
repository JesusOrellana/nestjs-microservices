import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ role: 'auth', cmd: 'login' })
  login(@Body() body: any): string {
    return `email ${body?.email}`;
  }

  @MessagePattern({ cmd: 'test' })
  getHello(): string {
    return this.appService.getHello();
  }
}
