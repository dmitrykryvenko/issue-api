import { prop, Typegoose } from 'typegoose';

enum EState {
  OPEN = 'OPEN',
  PENDING = 'PENDING',
  CLOSED = 'CLOSED',
}

export class Issue extends Typegoose {

  @prop()
  label: string;

  @prop()
  description: string;

  @prop()
  state: EState;
}
