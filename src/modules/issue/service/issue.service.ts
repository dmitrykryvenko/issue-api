import { Injectable } from '@nestjs/common';
import { Issue } from '../issue';

import {InjectModel} from 'nestjs-typegoose';
import {ReturnModelType} from '@typegoose/typegoose';

@Injectable()
export class IssueService {
  constructor(@InjectModel(Issue) private readonly issueModel: ReturnModelType<typeof Issue>) {
  }

  async create(issue: Issue) {
    const createdIssue = new this.issueModel(issue);
    return await createdIssue.save();
  }

  async getAll(): Promise<Issue[] | null> {
    return await this.issueModel.find();
  }

}
