import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthV1Service } from 'src/services/v1/auth-v1/auth-v1.service';

@Controller('api/v1/auth')
export class AuthV1Controller {
    constructor(private readonly appService: AuthV1Service) { }

    @Post('login')
    async login(@Body() body: any) {
        return this.appService.validateUser(body);
    }

    @Get('test')
    async test() {
        return this.appService.testUser();
    }
}
