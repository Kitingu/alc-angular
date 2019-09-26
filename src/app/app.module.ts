import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventlistComponent } from "./events/events-list-component";

@NgModule({
  imports: [BrowserModule],

  declarations: [EventsAppComponent,EventlistComponent],

  bootstrap: [EventsAppComponent]
})
export class AppModule {}
