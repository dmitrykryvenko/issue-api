import { Test, TestingModule } from '@nestjs/testing';
import { IssueUpdateResolver } from './issue-update.resolver';

describe('IssueUpdateResolver', () => {
  let resolver: IssueUpdateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssueUpdateResolver],
    }).compile();

    resolver = module.get<IssueUpdateResolver>(IssueUpdateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
