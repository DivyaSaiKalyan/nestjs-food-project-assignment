import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './../../Entities/cart.entity';
import { ApiTags } from '@nestjs/swagger';

/**
 * This is cart controller all Apis are avaliable here
 */
@ApiTags('Cart info')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /**
   * This method is used to add items into cart
   * @param data
   * @param email
   * @returns
   */
  @Post('addItemsIntoCart/:email')
  async addItemsIntoCart(@Body() data: Cart, @Param('email') email: string) {
    return await this.cartService.addItemsIntoCart(data, email);
  }

  /**
   * This method is used to getcartItems based on email
   * @param email
   * @returns
   */
  @Get('getCartItems/:email')
  async getCartItems(@Param('email') email: string) {
    return await this.cartService.getCartItems(email);
  }
}
