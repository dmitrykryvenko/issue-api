import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { EState } from 'graphql.schema';

@Schema()
export class Issue extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  state: EState;
}

export const IssueSchema = SchemaFactory.createForClass(Issue);
