import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthAPIService } from '../../services/auth-api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authState$: Observable<boolean>;

  private authState$$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router, private authAPIService: AuthAPIService) {
    this.authState$ = this.authState$$.asObservable();
  }

  login = '';

  password = '';

  loginHandle(value: string) {
    this.login = value;
  }

  passwordHandle(value: string) {
    this.password = value;
  }

  logoutHandle() {
    const tokenId = window.localStorage.getItem('userTokenMid');
    if (tokenId) {
      window.localStorage.removeItem('userTokenMid');
      this.authState$$.next(false);
      this.router.navigate(['/auth']);
    }
  }

  comeIn() {
    if (this.login && this.password) {
      this.authAPIService.signIn({ login: this.login, password: this.password }).subscribe((response) => {
        console.log('response', response);
        window.localStorage.setItem('userTokenMid', response.token);
        this.router.navigate(['']);
        this.authState$$.next(true);
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
