import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Maintenance } from './maintenance.entity';
import { Menu } from './menu.entity';

/**
 * This is a Restaurent entity so related info is avalibale here
 */
@Entity()
export class Restaurent extends Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @ApiProperty()
  RestaurentName: string;

  @Column({ unique: true })
  @IsEmail()
  @ApiProperty()
  RestaurentEmail: string;

  @Column({ unique: true })
  @IsString()
  @ApiProperty()
  phoneNumber: string;

  @Column()
  @IsString()
  @ApiProperty()
  location: string;

  @Column()
  @IsString()
  @ApiProperty()
  rating: string;

  @Column()
  @IsString()
  @ApiProperty()
  description: string;

  @OneToMany(() => Menu, (menu) => menu.restaurent)
  menu: Menu[];

  async addMenuData(menu: Menu) {
    if (this.menu == null) {
      this.menu = new Array<Menu>();
    }
    this.menu.push(menu);
  }
}
