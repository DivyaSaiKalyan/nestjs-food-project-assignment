import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { Cart } from './../../Entities/cart.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    private readonly userService: UserService
  ) {}

  async makePayment(email: string) {
    const getUser = await this.userService.findUser(email);
    if (!getUser) {
      throw new UnauthorizedException('user not found');
    }
    const getCart = await this.cartRepository.find({ user: getUser });
    await getManager().query(
      `update cart set isActive=replace(isActive,true,false) where userId=${getUser.id};`
    );
    const result = {
      your_cart_items: getCart,
      payment_status: 'amount succsfully paid'
    };
    return result;
  }
}
