import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';
import { Restaurent } from './restaurent.entity';
import { Cart } from './cart.entity';

/**
 * This is menu entity
 */
@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @ApiProperty()
  restaurentName: string;

  @Column()
  @IsString()
  @ApiProperty()
  foodItemName: string;

  @Column()
  @IsInt()
  @ApiProperty()
  foodItemPrice: number;

  @Column()
  @IsString()
  @ApiProperty()
  category: string;

  @ManyToOne(() => Restaurent, (restaurent) => restaurent.menu)
  restaurent: Restaurent;

  @OneToMany(() => Cart, (cart) => cart.menu)
  cart: Cart[];
}
