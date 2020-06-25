import { EState, IssueUpdateInput } from 'graphql.schema';

export class IssueUpdateDto implements IssueUpdateInput {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly state?: EState;
}
