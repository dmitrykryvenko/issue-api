import { Test, TestingModule } from '@nestjs/testing';
import { IssueDeleteResolver } from './issue-delete.resolver';

describe('IssueDeleteResolver', () => {
  let resolver: IssueDeleteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssueDeleteResolver],
    }).compile();

    resolver = module.get<IssueDeleteResolver>(IssueDeleteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
