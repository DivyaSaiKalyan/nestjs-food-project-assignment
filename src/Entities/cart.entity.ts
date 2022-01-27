import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Menu } from './menu.entity';

/**
 * This is cart entity
 */
@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  foodItemPrice: number;

  @Column()
  @ApiProperty()
  foodItemName: string;

  @Column()
  @ApiProperty()
  restaurentName: string;

  @Column()
  @ApiProperty()
  quantity: number;

  @Column()
  totalPrice: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: new Date().toLocaleString() })
  orderDate: string;

  @ManyToOne(() => User, (user) => user.cart)
  user: User;

  @ManyToOne(() => Menu, (menu) => menu.cart)
  menu: Menu;
}
