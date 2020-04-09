import {Entity, model, property} from '@loopback/repository';

@model()
export class OrderInventory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id_order?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomor_order: string;

  @property({
    type: 'number',
    required: true,
  })
  jumlah: number;

  @property({
    type: 'date',
  })
  waktu_ambil?: string;


  constructor(data?: Partial<OrderInventory>) {
    super(data);
  }
}

export interface OrderInventoryRelations {
  // describe navigational properties here
}

export type OrderInventoryWithRelations = OrderInventory & OrderInventoryRelations;
