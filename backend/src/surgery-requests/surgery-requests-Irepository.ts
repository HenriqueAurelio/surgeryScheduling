import { CreateSurgeryRequestDto } from './dto/create-surgery-request.dto';
import { UpdateSurgeryRequestDto } from './dto/update-surgery-request.dto';
import { Surgery } from './entities/surgery-request.entity';

export abstract class ISurgeryRequestsRepository {
  abstract create(
    createSurgeryRequestDto: CreateSurgeryRequestDto,
  ): Promise<Surgery>;
  abstract findAll(): Promise<Surgery[]>;
  abstract update(
    id: string,
    updateSurgeryRequestDto: UpdateSurgeryRequestDto,
  ): Promise<Surgery>;
  abstract findById(id: string): Promise<Surgery>;
  abstract delete(id: string): Promise<Surgery>;
}
