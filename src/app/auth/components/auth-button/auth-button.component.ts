import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent {
  public isAuth = false;

  public isLogged = false;

  public logOut = $localize`Log out`;

  public logIn = $localize`Log in`;

  private subscription: Subscription;

  constructor(public authService: AuthService) {
    this.subscription = this.authService.authState$.subscribe((value) => {
      this.isLogged = value;
    });
  }

  logUser() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      this.authService.logoutHandle();
    }
    this.authService.redirectToAuth();
  }
}
