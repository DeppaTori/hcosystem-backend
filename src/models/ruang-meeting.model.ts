import { Entity, model, property } from '@loopback/repository';

@model()
export class RuangMeeting extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_ruangan?: number;

  @property({
    type: 'string',
    required: true,
  })
  nama_ruangan: string;

  @property({
    type: 'string',
    required: true,
  })
  fasilitas_ruangan: string;

  @property({
    type: 'number',
    required: true,
  })
  kapasitas: number;

  @property({
    type: 'string',
  })
  foto?: string;

  @property({
    type: 'string',
    required: true,
  })
  status_tersedia: string;


  constructor(data?: Partial<RuangMeeting>) {
    super(data);
  }
}

export interface RuangMeetingRelations {
  // describe navigational properties here
}

export type RuangMeetingWithRelations = RuangMeeting & RuangMeetingRelations;
