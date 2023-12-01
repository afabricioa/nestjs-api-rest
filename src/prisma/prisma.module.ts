import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
  //a propriedade exports é necessária para torna o Service publico para ser importado em outros módulos
})
export class PrismaModule {}
