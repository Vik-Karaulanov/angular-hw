import { Component, HostListener, OnInit } from '@angular/core';
import { DisputeService } from '../shared/services/dispute.service';
import { Dispute } from '../shared/models/Dispute';
import { DateService } from '../shared/services/date.service';
import { Participants, Status } from '../shared/enums/enums';
import { Constants } from '../shared/constants/constants';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
  private windowMinWidth: number = Constants.MIN_WINDOW_SIZE;
  private awbTagWith: number = Constants.AWB_TAG_WIDTH;
  public windowSbj = new Subject();
  public windowSize!: any;

  constructor(
    private disputeService: DisputeService,
    private dateService: DateService
  ) {
    this.windowSbj
      .asObservable()
      .pipe(
        debounceTime(1000)
      )
      .subscribe((data) => this.windowSize = data);
  }

  ngOnInit(): void {
    this.disputeService
      .getDisputes()
      .subscribe((data: Dispute[]) => (this.disputes = data));
  }

  public isOverflowed(
    listLength: number,
    windowWidth: number,
    elementWidth: number
  ): boolean {
    const containerWidth = elementWidth * listLength;
    if (containerWidth < windowWidth) {
      return true;
    } else return false;
  }

  // @HostListener('window:resize', ['$event'])
  // public onResize(event: any) {
  //   this.windowSize = event.target.innerWidth;
  //   console.log('windowSize:', this.windowSize);
  // }

  @HostListener('window:resize', ['$event.target'])
  public onResize(target: any) {
    this.windowSbj.next(target.innerWidth);
  }

  // debounce(cb: () => () => void, timeout = 300) {
  //   let timer: any;
  //   return (...args: any) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(cb, timeout, args);
  //   };
  // }
}
