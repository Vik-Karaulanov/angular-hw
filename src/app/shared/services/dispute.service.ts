import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dispute } from '../models/Dispute';
import { Participants, Status, Issue } from '../enums/enums';

@Injectable({
  providedIn: 'root',
})
export class DisputeService {
  constructor() {}

  getDisputes(): Observable<Dispute[]> {
    return of([
      {
        referenceNumber: '2012/123',
        description: 'NFD is Below Threshold',
        impactOfIssue: Issue.Major,
        status: Status.Open,
        update: {
          updatedBy: 'John Doe',
          date: new Date('11.11.2020'),
        },
        comments: [
          {
            commenter: Participants.Carrier,
            message: 'Issue is at CDMP-F and they are fixing it.',
          },
          {
            commenter: Participants.Forwarder,
            message: 'Issue is at CDMP-F and this is being fixed.',
          },
          {
            commenter: Participants.CargoIQ,
            message:
              'Issue to be resolved between CDMP-C and CDMP-F. The NDF minimum threshold is not met.',
          },
        ],
        cargo: {
          awb: ['176-2121421'],
          carrier: 'ACC',
          forwarder: 'CCN',
          actionItem: 'This is a free text ...',
          owner: 'ACC',
          dueDate: new Date('07.12.2020'),
          completionDate: new Date('12.12.2020'),
        },
      },
      {
        referenceNumber: '2012/124',
        description: 'NFD is Below Threshold',
        impactOfIssue: Issue.NoImpact,
        status: Status.Closed,
        update: {
          updatedBy: 'Johnny Bravo',
          date: new Date('10.11.2020'),
        },
        comments: [
          {
            commenter: Participants.Carrier,
            message: 'Issue is at CDMP-F and they are fixing it.',
          },
          {
            commenter: Participants.Forwarder,
            message:
              'Issue is at CDMP-F and this is being fixed. This is an example if the text is too long to be displayed',
          },
          {
            commenter: Participants.CargoIQ,
            message:
              'Issue to be resolved between CDMP-C and CDMP-F. The NDF minimum threshold is not met.',
          },
        ],
        cargo: {
          awb: [
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
            '176-21213124',
          ],
          carrier: 'ACC',
          forwarder: 'CCN',
          actionItem: 'This is a free text ...',
          owner: 'ACC',
          dueDate: new Date('06.11.2020'),
          completionDate: new Date('10.11.2020'),
        },
      },
      {
        referenceNumber: '2012/124',
        description: 'NFD is Below Threshold',
        impactOfIssue: Issue.Minor,
        status: Status.InProgress,
        update: {
          updatedBy: 'Ivan Ivanov',
          date: new Date('08.01.2019'),
        },
        comments: [
          {
            commenter: Participants.Carrier,
            message: 'Issue is at CDMP-F and they are fixing it.',
          },
          {
            commenter: Participants.Forwarder,
            message:
              'Issue is at CDMP-F and this is being fixed. This is an example if the text is too long to be displayed',
          },
          {
            commenter: Participants.CargoIQ,
            message:
              'Issue to be resolved between CDMP-C and CDMP-F. The NDF minimum threshold is not met.',
          },
        ],
        cargo: {
          awb: [
            '176-21213527',
            '176-21213527',
            '176-21213527',
            '176-21213527',
            '176-21213527',
            '176-21213527',
          ],
          carrier: 'ACC',
          forwarder: 'CCN',
          actionItem: 'This is a free text ...',
          owner: 'ACC',
          dueDate: new Date('06.11.2020'),
          completionDate: new Date('10.11.2020'),
        },
      },
    ]);
  }
}
