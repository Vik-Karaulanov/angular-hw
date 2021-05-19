import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DateService {
  constructor() {}

  public formatDate(date: Date): string {
    const monthNames: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let monthName = monthNames[monthIndex];
    let year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
  }
}
