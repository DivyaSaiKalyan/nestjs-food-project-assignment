import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../../Entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { JwtServiceClass } from './../../Common/Providers/jwt.service';
import { Response } from 'express';
import { Address } from './../../Entities/address.entity';
/**This bcrypt is used to hash the password */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcryptjs');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    private readonly jwtserviceClass: JwtServiceClass
  ) {}

  /**
   * This method is used to register the user
   * @param data is taken from the user
   * @returns save the data in register entity
   */
  async registerUser(data: User) {
    const user = new User();
    user.createdAt = data.name;
    const userData = Object.assign(user, data);
    return await this.userRepository.save(userData);
  }

  /**
   * This method is used to login the user and generate the jwt token
   * @param data is teken from the user
   * @returns user without password
   */
  async loginUser(data: LoginDto, response: Response) {
    const getUser = await this.findUser(data.email);
    const match = await bcrypt.compare(data.password, getUser.password);
    if (!getUser || match == false) {
      throw new UnauthorizedException('incorrect credentials');
    }
    const jwt = this.jwtserviceClass.createJwtToken(getUser);
    response.cookie('jwt', jwt, { httpOnly: true });
    const { password, ...result } = getUser;
    return result;
  }

  async addAddress(data: Address, email: string) {
    const getUser = await this.findUser(email);
    let address = new Address();
    let user = new User();
    if (!getUser) {
      throw new UnauthorizedException('your not a register user');
    } else {
      address = data;
      user = getUser;
      //user.addAddressData(address);
      address.user = user;
      return await this.addressRepository.save(address);
    }
  }

  async findUser(email: string) {
    const getUser = await this.userRepository.findOne({
      email: email
    });
    return getUser;
  }
}
