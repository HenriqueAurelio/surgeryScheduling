import { Injectable } from '@nestjs/common';
import { CreateSurgeryRequestDto } from './dto/create-surgery-request.dto';
import { PrismaService } from 'src/database/prisma.service';
import { randomUUID } from 'crypto';
import { UpdateSurgeryRequestDto } from './dto/update-surgery-request.dto';

@Injectable()
export class SurgeryRequestsRepository {
  constructor(private prisma: PrismaService) { }
  async create(createSurgeryRequestDto: CreateSurgeryRequestDto) {
    try {
      const surgeryRequest = await this.prisma.surgeryRequest.create({
        data: {
          id: randomUUID(),
          roomId: createSurgeryRequestDto.roomId,
          hospitalId: createSurgeryRequestDto.hospitalId,
          doctor: createSurgeryRequestDto.doctor,
          surgeryDate: new Date(createSurgeryRequestDto.surgeryDate),
          generalObservations: createSurgeryRequestDto.generalObservations,
          procedureId: createSurgeryRequestDto.procedureId,
        },
      });
      return surgeryRequest;
    } catch (error) {
      console.log('Error ao criar surgery request', error);
    }
  }

  async findAll() {
    try {
      const surgeryRequests = await this.prisma.surgeryRequest.findMany({
        include: { hospital: true, room: true, procedure: true },
      });
      return surgeryRequests;
    } catch (e) {
      console.log('Error ao listar pedidos cirurgicos', e);
    }
  }

  async update(id: string, updateSurgeryRequestDto: UpdateSurgeryRequestDto) {
    try {
      const surgeryRequest = await this.prisma.surgeryRequest.update({
        where: { id },
        data: {
          roomId: updateSurgeryRequestDto.roomId,
          hospitalId: updateSurgeryRequestDto.hospitalId,
          doctor: updateSurgeryRequestDto.doctor,
          surgeryDate: new Date(updateSurgeryRequestDto.surgeryDate),
          generalObservations: updateSurgeryRequestDto.generalObservations,
          procedureId: updateSurgeryRequestDto.procedureId,
        },
      });
      return surgeryRequest;
    } catch (e) {
      console.log('Error ao atualizar pedido cirurgico', e);
    }
  }

  async findById(id: string) {
    try {
      const surgeryRequest = await this.prisma.surgeryRequest.findUnique({
        where: { id },
        include: { hospital: true, room: true },
      });
      return surgeryRequest;
    } catch (e) {
      console.log('Error ao listar pedidos cirurgicos', e);
    }
  }

  async delete(id: string) {
    try {
      return await this.prisma.surgeryRequest.delete({
        where: { id },
      });
    } catch (e) {
      console.log('Error ao remover o pedido cirurgico', e);
    }
  }
}
