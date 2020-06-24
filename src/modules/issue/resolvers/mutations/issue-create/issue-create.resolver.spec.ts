import { Test, TestingModule } from '@nestjs/testing';
import { IssueCreateResolver } from './issue-create.resolver';

describe('IssueCreateResolver', () => {
  let resolver: IssueCreateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssueCreateResolver],
    }).compile();

    resolver = module.get<IssueCreateResolver>(IssueCreateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
