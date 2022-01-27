import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsString } from 'class-validator';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Maintenance } from './maintenance.entity';
import { Address } from './address.entity';
import { Cart } from './cart.entity';
/**This is used to maintain password strong */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');
/**
 * This is a user entity all user related columns are avaliable here
 */
@Entity()
export class User extends Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  @IsString()
  name: string;

  @Column({ unique: true })
  @ApiProperty()
  @IsEmail()
  email: string;

  @Column({ unique: true })
  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @Column()
  @ApiProperty()
  @IsInt()
  age: number;

  @Column()
  @ApiProperty()
  @IsString()
  password: string;

  @BeforeInsert()
  async strongPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => Address, (address) => address.user)
  address: Address[];

  async addAddressData(address: Address) {
    if (this.address == null) {
      this.address = new Array<Address>();
    }
    this.address.push(address);
  }

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];

  async addCartData(cart: Cart) {
    if (this.cart == null) {
      this.cart = new Array<Cart>();
    }
    this.cart.push(cart);
  }
}
