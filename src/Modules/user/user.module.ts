import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './../../Entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { Address } from './../../Entities/address.entity';
import { Cart } from './../../Entities/cart.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Address, Cart]),
    JwtModule.register({
      secret: 'secrect',
      signOptions: { expiresIn: '3h' }
    })
  ],

  controllers: [UserController],
  providers: [UserService, JwtServiceClass]
})
export class UserModule {}
