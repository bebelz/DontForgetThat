import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { MatIconModule, MatToolbarModule } from '@angular/material';
=======
import { MatButtonModule, MatCardModule, MatIconModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
>>>>>>> origin/master

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { EventsService } from './services/events.service';
<<<<<<< HEAD
import { AppRoutingModule } from './/app-routing.module';
=======
import { EventDetailsComponent } from './event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ROUTES: Routes = [
  { path: 'events', component: EventListComponent},
  { path: 'event/:id', component: EventDetailsComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' }
];
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    EventListComponent,
    EventComponent,
<<<<<<< HEAD
=======
    EventDetailsComponent,
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
<<<<<<< HEAD
    MatIconModule,
    AppRoutingModule,
=======
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
>>>>>>> origin/master
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
