import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { HospitalsMock } from './database/mocks/hospitals';
import { RoomsMock } from './database/mocks/rooms';
import { ProceduresMock } from './database/mocks/procedures';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private prisma: PrismaService) { }

  async onApplicationBootstrap(): Promise<any> {
    const hospitals = await this.prisma.hospital.findMany();
    if (hospitals.length === 0) {
      console.log('Seeding initial database...');
      await this.prisma.hospital.createMany({
        data: HospitalsMock,
      });

      await this.prisma.procedure.createMany({
        data: ProceduresMock,
      });

      await this.prisma.room.createMany({
        data: RoomsMock,
      });
      console.log('Initial database seeded...');
    }
  }
}
