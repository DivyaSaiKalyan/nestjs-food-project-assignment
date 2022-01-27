import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/**
 * This is a address entity user have multiple address so all address are avalibale here
 */
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @ApiProperty()
  doorNo: string;

  @Column()
  @IsString()
  @ApiProperty()
  streetName: string;

  @Column()
  @IsString()
  @ApiProperty()
  city: string;

  @Column()
  @IsString()
  @ApiProperty()
  state: string;

  @Column()
  @IsString()
  @ApiProperty()
  cuntry: string;

  @Column()
  @IsString()
  @ApiProperty()
  pincode: string;

  @ManyToOne(() => User, (user) => user.address)
  user: User;
}
