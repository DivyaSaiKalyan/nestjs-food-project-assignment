import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './../../Entities/cart.entity';
import { RestaurentService } from '../restaurent/restaurent.service';
import { UserService } from '../user/user.service';
import { Restaurent } from './../../Entities/restaurent.entity';
import { Menu } from './../../Entities/menu.entity';
import { User } from './../../Entities/user.entity';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { Address } from './../../Entities/address.entity';

/**
 * This is cart module cart related configurations are avaliable here
 */
@Module({
  imports: [TypeOrmModule.forFeature([Cart, Restaurent, Menu, User, Address])],

  controllers: [CartController],
  providers: [CartService, RestaurentService, UserService, JwtServiceClass]
})
export class CartModule {}
