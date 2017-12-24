import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule,
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
import { UsersService } from './services/users.service';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListSelectorComponent } from './user-list-selector/user-list-selector.component';

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
    UserComponent,
    UserListComponent,
    UserListSelectorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatListModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  entryComponents: [
    UserListSelectorComponent,
  ],
  providers: [
    EventsService,
    AuthService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
