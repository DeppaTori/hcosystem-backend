import { Entity, model, property } from '@loopback/repository';

@model()
export class Supir extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nama: string;

  @property({
    type: 'string',
    required: true,
  })
  nomor_handphone: string;

  @property({
    type: 'string',
    required: true,
    default: 'tersedia',
  })
  status_tersedia: string;


  constructor(data?: Partial<Supir>) {
    super(data);
  }
}

export interface SupirRelations {
  // describe navigational properties here
}

export type SupirWithRelations = Supir & SupirRelations;
