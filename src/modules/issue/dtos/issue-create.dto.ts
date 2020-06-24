import { IssueCreateInput } from '../../../graphql.schema';

export class IssueCreateDto implements IssueCreateInput {
  readonly title: string;
  readonly description: string;
}
