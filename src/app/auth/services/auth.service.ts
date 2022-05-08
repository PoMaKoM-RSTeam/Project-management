import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthAPIService } from '../../services/auth-api.service';
import { Message } from '../../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState$: Observable<boolean>;

  private authState$$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private authAPIService: AuthAPIService, private message: NzMessageService) {
    this.authState$ = this.authState$$.asObservable();
  }

  login = '';

  password = '';

  signUpName = '';

  signUpLogin = '';

  signUpPassword = '';

  loginHandle(value: string) {
    this.login = value;
  }

  passwordHandle(value: string) {
    this.password = value;
  }

  signUpNameHandle(value: string) {
    this.signUpName = value;
  }

  signUpLoginHandle(value: string) {
    this.signUpLogin = value;
  }

  signUpPasswordHandle(value: string) {
    this.signUpPassword = value;
  }

  redirectToAuth() {
    this.router.navigate(['/auth']);
  }

  logoutHandle() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      window.localStorage.removeItem('userTokenMid');
      this.authState$$.next(false);
      this.redirectToAuth();
    }
  }

  comeIn() {
    if (this.login && this.password) {
      this.authAPIService.signIn({ login: this.login, password: this.password }).subscribe((response) => {
        if (response) {
          window.localStorage.setItem('userTokenMid', response.token);
          this.login = '';
          this.password = '';
          this.router.navigate(['']);
          this.authState$$.next(true);
        }
      });
    }
  }

  signUpNewUser() {
    if (this.signUpName && this.signUpLogin && this.signUpPassword) {
      this.authAPIService
        .signUp({ name: this.signUpName, login: this.signUpLogin, password: this.signUpPassword })
        .subscribe((response) => {
          if (response) {
            this.message.create(
              Message.SUCCESS,
              `Great! ${response.name}, you created new account. Please sign in system.`,
            );
            this.signUpName = '';
            this.signUpLogin = '';
            this.signUpPassword = '';
          }
        });
    }
  }

  isLogged() {
    if (window.localStorage.getItem('userTokenMid')) {
      this.authState$$.next(true);
      return true;
    }
    return false;
  }
}
