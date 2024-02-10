import { Test, TestingModule } from '@nestjs/testing';
import { AuthV1Service } from './auth-v1.service';

describe('AuthV1Service', () => {
  let service: AuthV1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthV1Service],
    }).compile();

    service = module.get<AuthV1Service>(AuthV1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
