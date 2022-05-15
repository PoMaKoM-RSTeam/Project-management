import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthAPIService } from '../../services/auth-api.service';
import { Message } from '../../../constants/enums';
import { ITokenInfo } from '../../models/column.model';

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

  isLoading = false;

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
      window.localStorage.removeItem('userLogin');
      window.localStorage.removeItem('userTokenMid');
      this.authState$$.next(false);
      this.redirectToAuth();
    }
  }

  comeIn() {
    if (this.login && this.password) {
      this.isLoading = true;
      this.authAPIService.signIn({ login: this.login, password: this.password }).subscribe((response) => {
        this.isLoading = false;
        if (response) {
          window.localStorage.setItem('userLogin', this.login);
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
      this.isLoading = true;
      this.authAPIService
        .signUp({ name: this.signUpName, login: this.signUpLogin, password: this.signUpPassword })
        .subscribe((response) => {
          this.isLoading = false;
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
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      const tokenInfo: ITokenInfo = jwt_decode(tokenId);

      const now = moment().unix();
      const duration = moment.duration(moment.unix(now).diff(moment.unix(tokenInfo.iat)));
      const getHours = duration.asHours();
      if (getHours >= 24) {
        this.logoutHandle();
        return false;
      }

      this.authState$$.next(true);
      return true;
    }
    return false;
  }
}
