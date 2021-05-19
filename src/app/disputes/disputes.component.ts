import { Component, OnInit } from '@angular/core';
import { DisputeService } from '../shared/services/dispute.service';
import { Dispute } from '../shared/models/Dispute';
import { DateService } from '../shared/services/date.service';
import { Participants, Status } from '../shared/enums/enums';

@Component({
  selector: 'hw-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss'],
})
export class DisputesComponent implements OnInit {
  public disputes: Dispute[] = [];
  public Status = Status;
  public DateService = DateService;
  public formatDate = this.dateService.formatDate;
  public participants = Participants;

  constructor(
    private disputeService: DisputeService,
    private dateService: DateService
  ) {}

  ngOnInit(): void {
    this.disputeService
      .getDisputes()
      .subscribe((data: Dispute[]) => (this.disputes = data));
  }
}
