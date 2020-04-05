import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {PemesananMobil, PemesananMobilRelations, User, Mobil} from '../models';
import {DbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {MobilRepository} from './mobil.repository';

export class PemesananMobilRepository extends DefaultCrudRepository<
  PemesananMobil,
  typeof PemesananMobil.prototype.id,
  PemesananMobilRelations
> {

  public readonly user: BelongsToAccessor<User, typeof PemesananMobil.prototype.id>;

  public readonly mobil: BelongsToAccessor<Mobil, typeof PemesananMobil.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('MobilRepository') protected mobilRepositoryGetter: Getter<MobilRepository>,
  ) {
    super(PemesananMobil, dataSource);
    this.mobil = this.createBelongsToAccessorFor('mobil', mobilRepositoryGetter,);
    this.registerInclusionResolver('mobil', this.mobil.inclusionResolver);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter,);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
