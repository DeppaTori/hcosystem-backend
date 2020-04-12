import {Entity, model, property} from '@loopback/repository';

@model()
export class Catering extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_catering?: number;

  @property({
    type: 'number',
    required: true,
  })
  jumlah: number;

  @property({
    type: 'date',
    required: true,
  })
  tanggal: string;

  @property({
    type: 'string',
    required: true,
  })
  jenis_catering: string;


  constructor(data?: Partial<Catering>) {
    super(data);
  }
}

export interface CateringRelations {
  // describe navigational properties here
}

export type CateringWithRelations = Catering & CateringRelations;
