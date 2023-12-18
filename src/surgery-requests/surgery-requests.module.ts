import { Module } from '@nestjs/common';
import { SurgeryRequestsService } from './surgery-requests.service';
import { SurgeryRequestsController } from './surgery-requests.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ISurgeryRequestsRepository } from './surgery-requests-Irepository';
import { SurgeryRequestsRepository } from './surgery-requests.repository';

@Module({
  controllers: [SurgeryRequestsController],
  providers: [
    SurgeryRequestsService,
    PrismaService,
    {
      provide: ISurgeryRequestsRepository,
      useClass: SurgeryRequestsRepository,
    },
  ],
})
export class SurgeryRequestsModule { }
