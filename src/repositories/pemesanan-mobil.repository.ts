import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PemesananMobil, PemesananMobilRelations, User} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class PemesananMobilRepository extends DefaultCrudRepository<
  PemesananMobil,
  typeof PemesananMobil.prototype.id,
  PemesananMobilRelations
> {

  public readonly user: BelongsToAccessor<User, typeof PemesananMobil.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(PemesananMobil, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
