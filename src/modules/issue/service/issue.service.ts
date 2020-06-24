import { Injectable } from '@nestjs/common';
import {InjectModel} from 'nestjs-typegoose';

import { Issue } from '../issue';
import {ReturnModelType} from '@typegoose/typegoose';

import { EState } from '../../../graphql.schema';

@Injectable()
export class IssueService {
  constructor(@InjectModel(Issue) private readonly issueModel: ReturnModelType<typeof Issue>) {
  }

  async create(params: {title: string, description: string}) {
    const { title, description } = params;
    const issue = new this.issueModel();
    issue.title = title;
    issue.description = description;
    issue.state = EState.OPEN;

    return await issue.save();
  }

  async getAll(): Promise<Issue[] | null> {
    return await this.issueModel.find();
  }

}
