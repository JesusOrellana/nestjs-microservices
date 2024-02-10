import { Test, TestingModule } from '@nestjs/testing';
import { UsersV1Controller } from './users-v1.controller';

describe('UsersV1Controller', () => {
  let controller: UsersV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersV1Controller],
    }).compile();

    controller = module.get<UsersV1Controller>(UsersV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
