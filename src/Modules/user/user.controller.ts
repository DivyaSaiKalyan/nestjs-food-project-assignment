import { Body, Controller, Param, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './../../Entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { Address } from './../../Entities/address.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   * This method is used to register the user
   * @param data is taken from the user
   * @returns save the data in register entity
   */
  @Post('register')
  async createUser(@Body() data: User) {
    return await this.userService.registerUser(data);
  }

  @Post('login')
  async loginUser(
    @Body() data: LoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    return await this.userService.loginUser(data, response);
  }

  @Post('address/:email')
  async addAddress(@Body() data: Address, @Param('email') email: string) {
    return await this.userService.addAddress(data, email);
  }
}
