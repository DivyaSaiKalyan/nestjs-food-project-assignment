import { Module } from '@nestjs/common';
import { RestaurentController } from './restaurent.controller';
import { RestaurentService } from './restaurent.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurent } from './../../Entities/restaurent.entity';
import { Menu } from './../../Entities/menu.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurent, Menu])],

  controllers: [RestaurentController],
  providers: [RestaurentService]
})
export class RestaurentModule {}
