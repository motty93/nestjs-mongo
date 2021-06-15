import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common'
import { Product } from './products.model'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = await this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    )

    return { id: generatedId }
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    const products = await this.productsService.getProducts()
    return products as Product[]
  }

  @Get(':id')
  getProduct(@Param('id') productId: string): any {
    return this.productsService.getProduct(productId)
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') productId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    await this.productsService.updateProduct(
      productId,
      prodTitle,
      prodDesc,
      prodPrice,
    )

    return null
  }

  @Delete(':id')
  async removeProduct(@Param('id') productId: string) {
    await this.productsService.removeProduct(productId)

    return null
  }
}
