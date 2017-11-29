import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DateAdapter,
  MatButtonModule, MatCardModule, MatDatepickerModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event/event.component';
import { EventsService } from './services/events.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskLiskComponent } from './task-lisk/task-lisk.component';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { EventCreationFormComponent } from './event-creation-form/event-creation-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    EventListComponent,
    EventComponent,
    EventDetailsComponent,
    EventCreationFormComponent,
    TaskLiskComponent,
    TaskComponent,
    TaskFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [
    EventsService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
