import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <h2> started from the bottom now we here</h2>
  <img src="/assets/images/basic-shield.png"/>
  `
})
export class EventsAppComponent {
  title = 'app';
}
// imports are declared in webpac config hence they are relatively available
