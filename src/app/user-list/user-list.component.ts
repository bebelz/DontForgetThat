import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventUser } from '../models/event-user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  @Input()
  public userList: EventUser[];

  @Input()
  public alreadySelectedUserIds: string[];

  public selectedUsers: EventUser[];
  public unselectedUsers: EventUser[];

  constructor() { }

  ngOnInit() { }

  // We need to do this here because ngOnInit doesn't trigger with "(userList | async)"
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['userList'] && changes['userList'].currentValue) {
      this.updateUsersDisplay();
    }
  }

  private updateUsersDisplay(): void {
    this.selectedUsers =
      this.userList.filter(u => this.alreadySelectedUserIds && this.alreadySelectedUserIds.includes(u.id));
    this.unselectedUsers =
      this.userList.filter(u => !this.alreadySelectedUserIds || !this.alreadySelectedUserIds.includes(u.id));
  }

  // Things are shitty here but I want to go to bed
  public selectUser(user: EventUser): void {
    this.selectedUsers.push(user);
    this.alreadySelectedUserIds.push(user.id);
    this.removeFromList(this.unselectedUsers, user);
  }

  public unselectUser(user: EventUser): void {
    this.unselectedUsers.push(user);
    this.removeFromList<string>(this.alreadySelectedUserIds, user.id);
    this.removeFromList<EventUser>(this.selectedUsers, user);
  }

  private removeFromList<T>(userList: T[], user: T): void {
    const index = userList.indexOf(user, 0);
    if (index > -1) {
      userList.splice(index, 1);
    }
  }
}
