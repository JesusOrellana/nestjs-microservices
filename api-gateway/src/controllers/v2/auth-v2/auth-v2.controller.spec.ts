import { Test, TestingModule } from '@nestjs/testing';
import { AuthV2Controller } from './auth-v2.controller';

describe('AuthV2Controller', () => {
  let controller: AuthV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthV2Controller],
    }).compile();

    controller = module.get<AuthV2Controller>(AuthV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
