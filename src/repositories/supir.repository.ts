import {DefaultCrudRepository} from '@loopback/repository';
import {Supir, SupirRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SupirRepository extends DefaultCrudRepository<
  Supir,
  typeof Supir.prototype.id,
  SupirRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Supir, dataSource);
  }
}
