import {DefaultCrudRepository} from '@loopback/repository';
import {Catering, CateringRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CateringRepository extends DefaultCrudRepository<
  Catering,
  typeof Catering.prototype.id_catering,
  CateringRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Catering, dataSource);
  }
}
