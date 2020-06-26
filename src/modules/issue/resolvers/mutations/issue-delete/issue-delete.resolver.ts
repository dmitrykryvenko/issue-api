import { Args, ResolveField, Resolver } from '@nestjs/graphql';

import { IssueUpdateDto } from 'modules/issue/dtos/issue-update.dto';
import { IssueService } from 'modules/issue/service/issue.service';
import { Logger } from '@nestjs/common';

@Resolver('IssueMutations')
export class IssueDeleteResolver {
  constructor(private readonly issueService: IssueService) {
  }

  @ResolveField('issueDelete')
  async issueDelete(@Args('input') params: Partial<IssueUpdateDto>) {
    const { id } = params;
    try {
       await this.issueService.delete({ id });
       return {
        ok: true,
      };
    } catch (e) {
      Logger.log(e);
    }
  }
}
