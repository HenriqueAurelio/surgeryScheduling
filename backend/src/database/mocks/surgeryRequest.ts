import { randomUUID } from 'crypto';
import { HospitalsMock } from './hospitals';
import { ProceduresMock } from './procedures';
import { RoomsMock } from './rooms';

export const SurgeryRequestsMock = [
  {
    id: randomUUID(),
    doctor: 'Leonardo Augusto',
    generalObservations: '',
    procedureId: ProceduresMock[0].id + '132',
    roomId: RoomsMock[0].id,
    hospitalId: HospitalsMock[0].id,
    surgeryDate: '2023-12-17T18:45:00+0000',
  },
  {
    id: 'aef7e155-1cc0-4cec-bab3-aad5a6ec5517',
    doctor: 'Leonardo Augusto',
    generalObservations: '',
    procedureId: ProceduresMock[0].id,
    roomId: RoomsMock[0].id,
    hospitalId: HospitalsMock[0].id,
    surgeryDate: '2023-12-17T18:45:00+0000',
  },
];
