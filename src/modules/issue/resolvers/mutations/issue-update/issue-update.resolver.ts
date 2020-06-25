import { Args, ResolveField, Resolver } from '@nestjs/graphql';
import { IssueService } from 'modules/issue/service/issue.service';
import { IssueUpdateDto } from 'modules/issue/dtos/issue-update.dto';

@Resolver('IssueMutations')
export class IssueUpdateResolver {
  constructor(private readonly issueService: IssueService) {
  }

  @ResolveField('issueUpdate')
  async issueUpdate(@Args('input') params: Partial<IssueUpdateDto> ) {
    const {id, state} = params;
    try {
      const issue = this.issueService.update({id, state});
      return {
        ok: true,
        issue,
      };
    } catch (e) {
        throw new Error(e);
    }
  }
}
