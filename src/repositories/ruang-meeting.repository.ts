import {DefaultCrudRepository} from '@loopback/repository';
import {RuangMeeting, RuangMeetingRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RuangMeetingRepository extends DefaultCrudRepository<
  RuangMeeting,
  typeof RuangMeeting.prototype.id_ruangan,
  RuangMeetingRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(RuangMeeting, dataSource);
  }
}
