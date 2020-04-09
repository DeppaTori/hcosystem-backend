import {DefaultCrudRepository} from '@loopback/repository';
import {OrderInventory, OrderInventoryRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrderInventoryRepository extends DefaultCrudRepository<
  OrderInventory,
  typeof OrderInventory.prototype.id_order,
  OrderInventoryRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(OrderInventory, dataSource);
  }
}
