import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from './user.model';

@model()
export class PemesananMobil extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  tanggal_pemesanan: string;

  @property({
    type: 'string',
    required: true,
  })
  tipe_pemesanan: string;

  @property({
    type: 'string',
    required: true,
  })
  keterangan: string;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<PemesananMobil>) {
    super(data);
  }
}

export interface PemesananMobilRelations {
  // describe navigational properties here
}

export type PemesananMobilWithRelations = PemesananMobil & PemesananMobilRelations;
