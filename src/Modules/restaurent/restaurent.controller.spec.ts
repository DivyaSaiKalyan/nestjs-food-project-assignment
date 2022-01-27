import { Test, TestingModule } from '@nestjs/testing';
import { RestaurentController } from './restaurent.controller';

describe('RestaurentController', () => {
  let controller: RestaurentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurentController],
    }).compile();

    controller = module.get<RestaurentController>(RestaurentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
