import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `<div>
  <h1>upcoming angular events</h1>
  <hr />
  <event-thumbnail [event]="event1"> </event-thumbnail>
</div>
`
})
export class EventlistComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '12/12/2015',
    time: '11:30pm',
    price: 5000,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '12358-kw',
      city: 'Nairobi',
      country: 'Kenya'
    }
  };
}
