import {DefaultCrudRepository} from '@loopback/repository';
import {Mobil, MobilRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MobilRepository extends DefaultCrudRepository<
  Mobil,
  typeof Mobil.prototype.nomor_polisi,
  MobilRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Mobil, dataSource);
  }
}
