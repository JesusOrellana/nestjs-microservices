import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthV1Service {

    private client: ClientProxy;

    constructor(private configService: ConfigService) {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: configService.get<string>('AUTH_HOST'),
                port: +configService.get<number>('AUTH_PORT')
            },
        });
    }

    async validateUser(data: any): Promise<any> {
        return this.client.send({ role: 'auth', cmd: 'validate' }, data)
    }


    async testUser(): Promise<any> {
        try {
            console.log('se envia la petición: ', `${this.configService.get('AUTH_HOST')}:${this.configService.get('AUTH_PORT')}`);

            return this.client.send({ cmd: 'test' }, { data: "hola" })
        } catch (error) {
            console.log(error);

        }
    }
}
