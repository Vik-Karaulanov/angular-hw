import { Participants, Status, Issue } from '../enums/enums';
import { Cargo } from './Cargo';
import Update from './Update';


export interface Dispute {
  referenceNumber: string;
  description: string;
  status: Status;
  impactOfIssue: Issue;
  update: Update;
  comments: Comment[];
  cargo: Cargo;
}

export interface Comment {
  commenter: Participants;
  message: string;
}
