import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Restaurent } from './../../Entities/restaurent.entity';
import { Menu } from './../../Entities/menu.entity';
/**
 * All Restaurent Related business logics are avaliable here
 */
@Injectable()
export class RestaurentService {
  constructor(
    @InjectRepository(Restaurent)
    private readonly restaurentRepository: Repository<Restaurent>,
    @InjectRepository(Menu)
    private readonly menuRepository: Repository<Menu>
  ) {}

  async addRestaurest(data: Restaurent) {
    const restaurent = new Restaurent();
    restaurent.createdAt = data.RestaurentName;
    const newdata = Object.assign(restaurent, data);
    return await this.restaurentRepository.save(newdata);
  }

  async addMenu(data: Menu) {
    const getRestaurent = await this.findRestaurest(data.restaurentName);
    let restaurent = new Restaurent();
    let menu = new Menu();
    if (!getRestaurent) {
      throw new NotFoundException('Restaurent is not in the register list');
    } else {
      restaurent = getRestaurent;
      menu = data;
      //restaurent.addMenuData(menu);
      menu.restaurent = restaurent;
      return await this.menuRepository.save(menu);
    }
  }

  async getRestarentNames() {
    return await this.restaurentRepository.find();
  }

  async getFoods(restaurentName: string) {
    const getRestaurent = await this.restaurentRepository.findOne({
      RestaurentName: restaurentName
    });
    if (!getRestaurent) {
      throw new NotFoundException('Restaurent is not register');
    }
    return await this.menuRepository.find({
      restaurentName: getRestaurent.RestaurentName
    });
  }

  async findRestaurest(restaurentName: string) {
    const getRestaurent = await this.restaurentRepository.findOne({
      RestaurentName: restaurentName
    });
    return getRestaurent;
  }

  async findItem(Item: string, restaurentName: string) {
    const getItem = await this.menuRepository.findOne({
      foodItemName: Item,
      restaurentName: restaurentName
    });
    return getItem;
  }
}
