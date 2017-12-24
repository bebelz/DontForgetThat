import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { EventUser } from '../models/event-user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list-selector',
  templateUrl: './user-list-selector.component.html',
  styleUrls: ['./user-list-selector.component.scss']
})
export class UserListSelectorComponent implements OnInit {

  public userList: Observable<EventUser[]>;
  public alreadySelectedUserIds: string[];

  constructor(private dialogRef: MatDialogRef<UserListSelectorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string[],
              private usersService: UsersService) {
    this.userList = this.usersService.getUserList(0, 0);
    this.alreadySelectedUserIds = data;
  }

  ngOnInit() { }

  public save(selectedUserIds: string[]): void {
    this.dialogRef.close(selectedUserIds);
  }
}
