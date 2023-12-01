import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    //esse método serve para que na hora que o nest iniciar o projeto já conecte no banco de dados
    async onModuleInit() {
        await this.$connect();
    }
}
