import {
  Body,
  Header,
  Controller,
  Get,
  Post,
  Param,
  Patch,
} from '@nestjs/common'
import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    )

    return { id: generatedId }
  }

  @Get()
  getProducts(): any {
    return this.productsService.getProducts()
  }

  @Get(':id')
  getProduct(@Param('id') productId: string): any {
    return this.productsService.getProduct(productId)
  }

  @Patch(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    this.productsService.updateProduct(
      productId,
      prodTitle,
      prodDesc,
      prodPrice,
    )

    return null
  }
}
