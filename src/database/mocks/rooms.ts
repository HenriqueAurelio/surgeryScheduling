import { HospitalsMock } from './hospitals';
import { randomUUID } from 'crypto';

export const RoomsMock = [
  {
    id: 'b81b311c-87d1-4eea-8d33-a06573a4fff4',
    number: 101,
    hospitalId: HospitalsMock[0].id,
  },
  { id: randomUUID(), number: 102, hospitalId: HospitalsMock[1].id },
  { id: randomUUID(), number: 103, hospitalId: HospitalsMock[2].id },
  { id: randomUUID(), number: 104, hospitalId: HospitalsMock[3].id },
  { id: randomUUID(), number: 105, hospitalId: HospitalsMock[4].id },
  { id: randomUUID(), number: 106, hospitalId: HospitalsMock[5].id },
  { id: randomUUID(), number: 107, hospitalId: HospitalsMock[6].id },
  { id: randomUUID(), number: 108, hospitalId: HospitalsMock[7].id },
  { id: randomUUID(), number: 109, hospitalId: HospitalsMock[8].id },
  { id: randomUUID(), number: 110, hospitalId: HospitalsMock[9].id },
  { id: randomUUID(), number: 111, hospitalId: HospitalsMock[10].id },
  { id: randomUUID(), number: 112, hospitalId: HospitalsMock[11].id },
  { id: randomUUID(), number: 113, hospitalId: HospitalsMock[12].id },
  { id: randomUUID(), number: 114, hospitalId: HospitalsMock[13].id },
  { id: randomUUID(), number: 115, hospitalId: HospitalsMock[14].id },
  { id: randomUUID(), number: 116, hospitalId: HospitalsMock[15].id },
  { id: randomUUID(), number: 117, hospitalId: HospitalsMock[16].id },
  { id: randomUUID(), number: 118, hospitalId: HospitalsMock[17].id },
  { id: randomUUID(), number: 119, hospitalId: HospitalsMock[18].id },
  { id: randomUUID(), number: 120, hospitalId: HospitalsMock[19].id },
];
