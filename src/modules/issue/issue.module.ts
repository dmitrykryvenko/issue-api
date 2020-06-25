import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IssueSchema } from './issue.schema';

import { IssueService } from './service/issue.service';
import { IssueController } from './controller/issue.controller';

import { IssueCreateResolver } from './resolvers/mutations/issue-create/issue-create.resolver';
import { IssueUpdateResolver } from './resolvers/mutations/issue-update/issue-update.resolver';
import { IssuesResolver } from './resolvers/queries/issues/issues.resolver';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Issue', schema: IssueSchema }])],
  providers: [IssueService, IssueCreateResolver, IssueUpdateResolver, IssuesResolver],
  controllers: [IssueController],
})
export class IssueModule {}
