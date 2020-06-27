import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { IIssue } from 'modules/issue/interfaces/issue.interface';

import { IssueUpdateDto } from '../dtos/issue-update.dto';
import { IssueCreateDto } from '../dtos/issue-create.dto';

import { EState } from 'graphql.schema';

@Injectable()
export class IssueService {
  constructor(@InjectModel('Issue') private readonly issueModel: Model<IIssue>) {}

  async create(createIssue: IssueCreateDto): Promise<IIssue> {
    const date = new Date();
    const createdIssue = new this.issueModel({...createIssue, state: EState.OPEN, createdAt: date.toISOString()});
    return createdIssue.save();
  }

  async update(updateIssue: IssueUpdateDto): Promise<IIssue> {
    const { id, state } = updateIssue;
    return this.issueModel.findByIdAndUpdate(id, { state }).exec();

  }

  async delete(deleteIssue: IssueUpdateDto): Promise<IIssue> {
    const { id } = deleteIssue;
    return this.issueModel.findByIdAndDelete(id).exec();
  }

  async findAll(): Promise<IIssue[]> {
    return this.issueModel.find().sort({createdAt: -1}).exec();
  }
}
