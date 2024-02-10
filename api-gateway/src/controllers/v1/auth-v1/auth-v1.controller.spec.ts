import { Test, TestingModule } from '@nestjs/testing';
import { AuthV1Controller } from './auth-v1.controller';

describe('AuthV1Controller', () => {
  let controller: AuthV1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthV1Controller],
    }).compile();

    controller = module.get<AuthV1Controller>(AuthV1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
