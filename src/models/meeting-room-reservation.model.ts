import {Entity, model, property} from '@loopback/repository';

@model()
export class MeetingRoomReservation extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_meeting_room_res?: number;

  @property({
    type: 'string',
    required: true,
  })
  agenda: string;

  @property({
    type: 'date',
    required: true,
  })
  waktu_meeting: string;

  @property({
    type: 'date',
  })
  start_meeting?: string;

  @property({
    type: 'date',
  })
  end_meeting?: string;

  @property({
    type: 'string',
  })
  deskripsi?: string;

  @property({
    type: 'string',
    required: true,
    default: 'schedule_available',
  })
  status: string;


  constructor(data?: Partial<MeetingRoomReservation>) {
    super(data);
  }
}

export interface MeetingRoomReservationRelations {
  // describe navigational properties here
}

export type MeetingRoomReservationWithRelations = MeetingRoomReservation & MeetingRoomReservationRelations;
