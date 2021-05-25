import { Component, OnInit } from '@angular/core';
import { DisputeService } from '../../shared/services/dispute.service';
import { Dispute } from '../../shared/models/dispute.model';
import { DateService } from '../../shared/services/date.service';
import { Participants, Status } from '../../shared/enums/enums';
import { Subject } from 'rxjs';

@Component({
  selector: 'hw-disputes',
  templateUrl: './disputes.component.html',
  styleUrls: ['./disputes.component.scss'],
})
export class DisputesComponent implements OnInit {
  public disputes: Dispute[] = [];
  public Status = Status;
  public participants = Participants;
  // public windowSbj = new Subject();
  public windowSize!: any;

  constructor(
    private disputeService: DisputeService,
    private dateService: DateService // better use momentjs library
  ) {}

  ngOnInit(): void {
    this.disputeService
      .getDisputes()
      .subscribe((data: Dispute[]) => (this.disputes = data));
  }

  getDisputeStatusClass(status: string): string {
    switch (status) {
      case Status.Closed:
        return 'closed-dispute';
      case Status.Open:
        return 'open-dispute';
      case Status.InProgress:
        return 'in-progress-dispute';
      default:
        return '';
    }
  }

  getDisputeStatusFontColor(status: string): string {
    switch (status) {
      case Status.Closed:
        return 'closed';
      case Status.Open:
        return 'open';
      case Status.InProgress:
        return 'in-progress';
      default:
        return '';
    }
  }

  getDisputeButtonClass(status: string): string {
    switch (status) {
      case Status.Open:
        return 'edit-btn bold';
      case Status.InProgress:
        return 'edit-btn bold';
      case Status.Closed:
        return 're-open-btn';
      default:
        return '';
    }
  }

  formatDate(date: Date): string {
    return this.dateService.formatDate(date);
  }

  // TODO: uses a Subject Object! read @HostListeners documentation;
  // @HostListener('window:resize', ['$event.target'])
  // public onResize(target: any) {
  //   this.windowSbj.next(target.innerWidth);
  // }

  // @HostListener('window:resize', ['$event'])
  // public onResize(event: any) {
  //   this.windowSize = event.target.innerWidth;
  //   console.log('windowSize:', this.windowSize);
  // }
}
