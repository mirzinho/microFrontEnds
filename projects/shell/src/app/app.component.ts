import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'shell';

  constructor() {
  }

  ngOnInit() {
    window.addEventListener('shellEvent', this.eventHandler)
  }

  ngOnDestroy(): void {
    window.removeEventListener('shellEvent', this.eventHandler)
  }

  eventHandler = (event: Event): void => {
    console.log('eventHandler', event)
  }
}
