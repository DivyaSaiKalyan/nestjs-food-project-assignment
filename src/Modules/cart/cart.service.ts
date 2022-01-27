import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Cart } from './../../Entities/cart.entity';
import { RestaurentService } from './../restaurent/restaurent.service';
import { Menu } from './../../Entities/menu.entity';
import { UserService } from './../user/user.service';
import { User } from './../../Entities/user.entity';
/**
 * This is cart service method
 */
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    private readonly restaurentService: RestaurentService,
    private readonly userService: UserService
  ) {}
  /**
   * This method is used to add food items into cart
   * @param data
   * @param email
   * @returns
   */
  async addItemsIntoCart(data: Cart, email: string): Promise<Cart> {
    const getRestaurent = await this.restaurentService.findRestaurest(
      data.restaurentName
    );
    const getItem = await this.restaurentService.findItem(
      data.foodItemName,
      data.restaurentName
    );
    const getUser = await this.userService.findUser(email);
    let cart = new Cart();
    let menu = new Menu();
    let user = new User();
    if (!getRestaurent || !getItem || !getUser) {
      throw new NotFoundException('Incorrect data');
    } else {
      if (cart.quantity == 0) {
        throw new BadRequestException('min value of the quentity is 1');
      }
      cart = data;
      const itemprice = (cart.foodItemPrice = getItem.foodItemPrice);
      cart.totalPrice = cart.quantity * itemprice;
      menu = getItem;
      user = getUser;
      cart.menu = menu;
      cart.user = user;
      return await this.cartRepository.save(cart);
    }
  }

  /**
   * This method is used to get cart items based on useremail
   * @param email
   * @returns
   */
  async getCartItems(email: string) {
    const getUser = await this.userService.findUser(email);
    const getCart = await this.cartRepository.find({
      user: getUser,
      isActive: true
    });
    if (!getUser) {
      throw new NotFoundException('user not found');
    } else if (getCart.length == 0) {
      throw new NotFoundException('Your cart is empty');
    }
    const price = await getManager().query(
      `select sum(totalPrice) "totalPrice" from cart where userId=${getUser.id}`
    );
    const result = price[0];
    const displsy = {
      all_Items_In_Your_Cart: getCart,
      Total_price_in_your_Cart_Items: result.totalPrice
    };
    return displsy;
  }
}
