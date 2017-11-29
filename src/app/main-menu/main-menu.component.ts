import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  public loggedUserName: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getLoggedUserInfo().subscribe(user => this.loggedUserName = user ? user.displayName : '');
  }

  public login(): void {
    this.authService.login();
  }

  public logout(): void {
    this.authService.logout();
  }
}
