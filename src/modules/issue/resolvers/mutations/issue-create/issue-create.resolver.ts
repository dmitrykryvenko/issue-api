import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { IssueService } from '../../../service/issue.service';
import { IssueCreateDto } from '../../../dtos/issue-create.dto';
import { Logger } from '@nestjs/common';

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
