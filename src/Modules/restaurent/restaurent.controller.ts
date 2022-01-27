import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Restaurent } from 'src/Entities/restaurent.entity';
import { RestaurentService } from './restaurent.service';
import { Menu } from './../../Entities/menu.entity';

@ApiTags('Restaurent Info')
@Controller('restaurent')
export class RestaurentController {
  constructor(private readonly restaurentService: RestaurentService) {}

  @Post('addRestaurest')
  async addRestaurest(@Body() data: Restaurent) {
    return await this.restaurentService.addRestaurest(data);
  }

  @Post('AddFood')
  async addFood(@Body() data: Menu) {
    return await this.restaurentService.addMenu(data);
  }
}
