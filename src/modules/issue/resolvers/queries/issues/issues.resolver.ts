import { ResolveField, Resolver, Query } from '@nestjs/graphql';
import { IssueService } from 'modules/issue/service/issue.service';

@Resolver('IssueQueries')
export class IssuesResolver {
  constructor(private readonly issueService: IssueService) {
  }

  @Query('getIssues')
  async issues() {
    try {
      const data = await this.issueService.findAll();
      return { data };
    } catch (e) {
      throw new Error(e);
    }
  }
}
