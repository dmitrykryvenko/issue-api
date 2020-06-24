import { Controller } from '@nestjs/common';
import { IssueService } from '../service/issue.service';

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}
}
