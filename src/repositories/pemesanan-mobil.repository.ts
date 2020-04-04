import {DefaultCrudRepository} from '@loopback/repository';
import {PemesananMobil, PemesananMobilRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PemesananMobilRepository extends DefaultCrudRepository<
  PemesananMobil,
  typeof PemesananMobil.prototype.id,
  PemesananMobilRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(PemesananMobil, dataSource);
  }
}
