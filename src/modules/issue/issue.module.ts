import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { Issue } from './issue';
import { IssueService } from './service/issue.service';
import { IssueController } from './controller/issue.controller';
import { IssueCreateResolver } from './resolvers/mutations/issue-create/issue-create.resolver';

@Module({
  imports: [TypegooseModule.forFeature([Issue])],
  providers: [IssueService, IssueCreateResolver],
  controllers: [IssueController],
})
export class IssueModule {}
