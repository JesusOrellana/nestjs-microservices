import { Module } from '@nestjs/common';
import { AuthV1Controller } from 'src/controllers/v1/auth-v1/auth-v1.controller';
import { AuthV1Service } from 'src/services/v1/auth-v1/auth-v1.service';

@Module({
    controllers: [AuthV1Controller],
    providers: [AuthV1Service]
})
export class AuthV1Module {}
