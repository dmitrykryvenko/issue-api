import { Module } from '@nestjs/common';
import { IssueService } from './service/issue.service';
import { IssueController } from './controller/issue.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Issue } from './issue';

@Module({
  imports: [TypegooseModule.forFeature([Issue])],
  providers: [IssueService],
  controllers: [IssueController],
})
export class IssueModule {}
