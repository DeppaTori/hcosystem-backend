import {Entity, model, property} from '@loopback/repository';

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


  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}

export interface InventoryRelations {
  // describe navigational properties here
}

export type InventoryWithRelations = Inventory & InventoryRelations;
