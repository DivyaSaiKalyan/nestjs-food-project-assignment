import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './../../Entities/cart.entity';
import { UserService } from './../user/user.service';
import { User } from './../../Entities/user.entity';
import { Address } from './../../Entities/address.entity';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart, User, Address])],

  controllers: [PaymentController],
  providers: [PaymentService, UserService, JwtServiceClass]
})
export class PaymentModule {}
