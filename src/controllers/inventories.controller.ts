import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Inventory } from '../models';
import { InventoryRepository, OrderInventoryRepository } from '../repositories';

export class InventoriesController {
  constructor(
    @repository(InventoryRepository)
    public inventoryRepository: InventoryRepository,
    @repository(OrderInventoryRepository)
    public orderInventoryRepository: OrderInventoryRepository
  ) { }

  @post('/inventories', {
    responses: {
      '200': {
        description: 'Inventory model instance',
        content: { 'application/json': { schema: getModelSchemaRef(Inventory) } },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, {
            title: 'NewInventory',
            exclude: ['id_inventory'],
          }),
        },
      },
    })
    inventory: Omit<Inventory, 'id_inventory'>,
  ): Promise<Inventory> {
    const savedInventory = await this.inventoryRepository.create(inventory);

    this.orderInventoryRepository.create({
      nomor_order: "DOC_INV_IN",
      jumlah: inventory.jumlah_kedatangan,
      waktu_ambil: new Date().toString(),
      tgl_input: new Date().toString(),
      status_order: "-",
      catatan_persetujuan: "",
      inventoryId: savedInventory.id_inventory,
      userId: 0,
      type_order: "IN",
      nomor_do: inventory.nomor_do,
      nomor_po: inventory.nomor_po
    });
    return savedInventory;
  }

  @get('/inventories/count', {
    responses: {
      '200': {
        description: 'Inventory model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.where(Inventory) where?: Where<Inventory>,
  ): Promise<Count> {
    return this.inventoryRepository.count(where);
  }

  @get('/inventories', {
    responses: {
      '200': {
        description: 'Array of Inventory model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Inventory, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Inventory) filter?: Filter<Inventory>,
  ): Promise<Inventory[]> {
    return this.inventoryRepository.find(filter);
  }

  @patch('/inventories', {
    responses: {
      '200': {
        description: 'Inventory PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, { partial: true }),
        },
      },
    })
    inventory: Inventory,
    @param.where(Inventory) where?: Where<Inventory>,
  ): Promise<Count> {
    return this.inventoryRepository.updateAll(inventory, where);
  }

  @get('/inventories/{id}', {
    responses: {
      '200': {
        description: 'Inventory model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Inventory, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Inventory, { exclude: 'where' }) filter?: FilterExcludingWhere<Inventory>
  ): Promise<Inventory> {
    return this.inventoryRepository.findById(id, filter);
  }

  @patch('/inventories/{id}', {
    responses: {
      '204': {
        description: 'Inventory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Inventory, { partial: true }),
        },
      },
    })
    inventory: Inventory,
  ): Promise<void> {
    await this.inventoryRepository.updateById(id, inventory);
  }

  @put('/inventories/{id}', {
    responses: {
      '204': {
        description: 'Inventory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventory: Inventory,
  ): Promise<void> {

    const saveOrderInvetory = await this.orderInventoryRepository.create({
      nomor_order: "DOC_INV_IN",
      jumlah: inventory.jumlah_kedatangan,
      waktu_ambil: new Date().toString(),
      tgl_input: new Date().toString(),
      status_order: "-",
      catatan_persetujuan: "",
      inventoryId: id,
      userId: 0,
      type_order: "IN",
      nomor_do: inventory.nomor_do,
      nomor_po: inventory.nomor_po
    });

    // update stok
    const curInventory = await this.inventoryRepository.findById(id);
    const updatedInventory = {
      ...inventory,
      stok: curInventory.stok + inventory.jumlah_kedatangan
    }


    await this.inventoryRepository.replaceById(id, updatedInventory);
  }

  @del('/inventories/{id}', {
    responses: {
      '204': {
        description: 'Inventory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventoryRepository.deleteById(id);
  }
}
