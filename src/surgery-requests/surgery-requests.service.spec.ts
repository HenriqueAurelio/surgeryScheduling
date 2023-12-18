import { Test, TestingModule } from '@nestjs/testing';
import { SurgeryRequestsService } from './surgery-requests.service';
import { SurgeryRequestsController } from './surgery-requests.controller';
import { SurgeryRequestsRepository } from './surgery-requests.repository';
import { PrismaService } from 'src/database/prisma.service';
import { ISurgeryRequestsRepository } from './surgery-requests-Irepository';
import { SurgeryRequestsMock } from 'src/database/mocks/surgeryRequest';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HospitalsMock } from 'src/database/mocks/hospitals';

describe('SurgeryRequestsService', () => {
  let surgeryRequestsController: SurgeryRequestsController;
  let createdSurgeryRequestId: string;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurgeryRequestsController],
      providers: [
        SurgeryRequestsService,
        {
          provide: ISurgeryRequestsRepository,
          useClass: SurgeryRequestsRepository,
        },
        PrismaService,
      ],
    }).compile();

    surgeryRequestsController = module.get<SurgeryRequestsController>(
      SurgeryRequestsController,
    );
  });

  it('Should return surgery requests', async () => {
    const result = await surgeryRequestsController.findAll();
    expect(result).toBeDefined();
  });

  it('Should not return surgery request', async () => {
    await expect(surgeryRequestsController.findById('1')).rejects.toThrow(
      new HttpException(
        'Não foi possível achar o pedido cirurgico',
        HttpStatus.NOT_FOUND,
      ),
    );
  });

  it('Should not create a surgery request', async () => {
    await expect(
      surgeryRequestsController.create(SurgeryRequestsMock[0]),
    ).rejects.toThrow(
      new HttpException(
        'Não foi possível criar o pedido cirurgico',
        HttpStatus.BAD_REQUEST,
      ),
    );
  });

  it('Should  create a surgery request', async () => {
    const result = await surgeryRequestsController.create(
      SurgeryRequestsMock[1],
    );
    createdSurgeryRequestId = result.id;
    expect(result.hospitalId).toBe(HospitalsMock[0].id);
  });

  afterAll(async () => {
    await surgeryRequestsController.delete(createdSurgeryRequestId);
  });
});
