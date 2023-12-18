import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { SurgeryRequestsService } from './surgery-requests.service';
import { CreateSurgeryRequestDto } from './dto/create-surgery-request.dto';
import { UpdateSurgeryRequestDto } from './dto/update-surgery-request.dto';
import { Response } from 'express';

@Controller('surgery-requests')
export class SurgeryRequestsController {
  constructor(
    private readonly surgeryRequestsService: SurgeryRequestsService,
  ) { }

  @Post()
  async create(@Body() createSurgeryRequestDto: CreateSurgeryRequestDto) {
    try {
      return await this.surgeryRequestsService.create(createSurgeryRequestDto);
    } catch (e) {
      throw new HttpException(
        'Não foi possível criar o pedido cirurgico',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll() {
    return await this.surgeryRequestsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return await this.surgeryRequestsService.findById(id);
    } catch (e) {
      throw new HttpException(
        'Não foi possível achar o pedido cirurgico',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSurgeryRequestDto: UpdateSurgeryRequestDto,
    @Res() res: Response,
  ) {
    try {
      const surgeryRequest = await this.surgeryRequestsService.update(
        id,
        updateSurgeryRequestDto,
      );
      res.status(200).json({
        message: 'Pedido cirurgico atualizado com sucesso',
        surgeryRequest,
      });
    } catch (e) {
      res.status(HttpStatus.NOT_FOUND).json({
        message:
          'Não foi possível encontrar o pedido cirurgico para atualização',
      });
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const surgeryRequestToBeDeleted =
        await this.surgeryRequestsService.delete(id);
      return surgeryRequestToBeDeleted;
    } catch (e) {
      throw new HttpException(
        'Não foi possível encontrar o pedido cirurgico para exclusão',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
