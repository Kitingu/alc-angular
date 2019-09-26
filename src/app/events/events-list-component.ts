import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>upcoming angular events</h1>
      <hr />
      <div class="well hoverwell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: \${{ event.price }}</div>
        <div>
          <span> Location: {{ event.location.address }} </span>
          <span>&nbsp;</span>
          <span>  {{ event.location.city }},{{ event.location.country }} </span>
        </div>
      </div>
    </div>
  `
})
export class EventlistComponent {
  event = {
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
