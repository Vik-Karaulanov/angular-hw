import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'hw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Homework';
  // windowSize!: number;

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.windowSize = event.target.innerWidth;
  //   console.log('windowSize:', this.windowSize)
  // }

  // debounce(cb: () => () => void, timeout = 300){
  //   let timer:any;
  //   return (...args:any) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(cb, timeout, args);
  //   };
  // }
}
