import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './../../Entities/cart.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Cart info')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('addItemsIntoCart/:email')
  async addItemsIntoCart(@Body() data: Cart, @Param('email') email: string) {
    return await this.cartService.addItemsIntoCart(data, email);
  }

  @Get('getCartItems/:email')
  async getCartItems(@Param('email') email: string) {
    return await this.cartService.getCartItems(email);
  }
}
