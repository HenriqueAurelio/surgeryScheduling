import { IsString, IsNotEmpty, IsDateString, Length } from 'class-validator';

export class CreateSurgeryRequestDto {
  @IsString()
  @IsNotEmpty({ message: 'The roomId should not be empty.' })
  roomId: string;

  @IsString()
  @IsNotEmpty({ message: 'The hospitalId should not be empty.' })
  hospitalId: string;

  @IsString()
  @IsNotEmpty({ message: 'The doctor should not be empty.' })
  doctor: string;

  @IsDateString()
  @IsNotEmpty({ message: 'The surgery date should not be empty.' })
  surgeryDate: string;

  @Length(0, 100)
  generalObservations: string;

  @IsString()
  @IsNotEmpty({ message: 'The procedureId should not be empty.' })
  procedureId: string;
}
