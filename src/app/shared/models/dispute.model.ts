import { Participants, Status, Issue } from '../enums/enums';
import { Cargo } from './cargo.model';
import Update from './update.model';


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
