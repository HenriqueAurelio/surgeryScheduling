import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { CreateSurgeryRequestDto } from './dto/create-surgery-request.dto';
import { UpdateSurgeryRequestDto } from './dto/update-surgery-request.dto';
import { ISurgeryRequestsRepository } from './surgery-requests-Irepository';

@Injectable()
export class SurgeryRequestsService {
  constructor(
    private readonly surgeryRequestsRepository: ISurgeryRequestsRepository,
  ) { }
  async create(createSurgeryRequestDto: CreateSurgeryRequestDto) {
    const surgeryRequest = await this.surgeryRequestsRepository.create(
      createSurgeryRequestDto,
    );
    if (!surgeryRequest) {
      throw new BadRequestException(
        'Não foi possível criar o pedido cirurgico',
      );
    }
    return surgeryRequest;
  }

  async findAll() {
    const surgeryRequests = await this.surgeryRequestsRepository.findAll();
    return surgeryRequests;
  }

  async findById(id: string) {
    const surgeryRequest = await this.surgeryRequestsRepository.findById(id);
    if (!surgeryRequest) {
      throw new NotFoundException('Pedido cirurgico não encontrado');
    }
    return surgeryRequest;
  }

  async update(id: string, updateSurgeryRequestDto: UpdateSurgeryRequestDto) {
    const surgeryRequestExists =
      await this.surgeryRequestsRepository.findById(id);
    if (!surgeryRequestExists) {
      throw new NotFoundException('Pedido cirurgico não encontrado');
    }
    const surgeryRequest = await this.surgeryRequestsRepository.update(
      id,
      updateSurgeryRequestDto,
    );
    return surgeryRequest;
  }

  async delete(id: string) {
    const surgeryRequestExists =
      await this.surgeryRequestsRepository.findById(id);
    if (!surgeryRequestExists) {
      throw new NotFoundException('Pedido cirurgico não encontrado');
    }
    return await this.surgeryRequestsRepository.delete(id);
  }
}
