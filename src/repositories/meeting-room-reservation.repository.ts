import {DefaultCrudRepository} from '@loopback/repository';
import {MeetingRoomReservation, MeetingRoomReservationRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MeetingRoomReservationRepository extends DefaultCrudRepository<
  MeetingRoomReservation,
  typeof MeetingRoomReservation.prototype.id_meeting_room_res,
  MeetingRoomReservationRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(MeetingRoomReservation, dataSource);
  }
}
