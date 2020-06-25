import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { IssueService } from 'modules/issue/service/issue.service';
import { IssueCreateDto } from 'modules/issue/dtos/issue-create.dto';

@Resolver('IssueMutations')
export class IssueCreateResolver {
  constructor(private readonly issueService: IssueService) {}

  @ResolveField('issueCreate')
  async issueCreate(@Args('input') params: IssueCreateDto) {
    const { title, description } = params;
    try {
      const issue = this.issueService.create({title, description});

      return {
        ok: true,
        issue,
      };

    } catch (e) {
      throw new Error(`Create Issue Error: ${e}`);
    }

  }
}
