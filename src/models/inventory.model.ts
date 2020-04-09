import { Entity, model, property, hasMany } from '@loopback/repository';
import { OrderInventory, OrderInventoryWithRelations } from './order-inventory.model';

@model()
export class Inventory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_inventory?: number;

  @property({
    type: 'string',
    required: true,
  })
  nama_barang: string;

  @property({
    type: 'number',
    required: true,
  })
  stok: number;

  @hasMany(() => OrderInventory)
  orderInventories: OrderInventory[];

  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}

export interface InventoryRelations {
  // describe navigational properties here
  orderInventories?: OrderInventoryWithRelations
}

export type InventoryWithRelations = Inventory & InventoryRelations;
