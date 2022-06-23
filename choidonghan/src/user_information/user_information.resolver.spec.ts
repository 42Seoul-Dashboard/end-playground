import { Test, TestingModule } from '@nestjs/testing';
import { UserInformationResolver } from './user_information.resolver';

describe('UserInformationResolver', () => {
  let resolver: UserInformationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserInformationResolver],
    }).compile();

    resolver = module.get<UserInformationResolver>(UserInformationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
