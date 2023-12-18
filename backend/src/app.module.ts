import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SurgeryRequestsModule } from './surgery-requests/surgery-requests.module';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [SurgeryRequestsModule],
  controllers: [],
  providers: [AppService, PrismaService],
})
export class AppModule { }
