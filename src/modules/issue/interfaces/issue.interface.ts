import * as mongoose from 'mongoose';
import { EState } from 'graphql.schema';

export interface IIssue extends mongoose.Document {
  readonly title: string;
  readonly description: string;
  readonly state: EState;
}
