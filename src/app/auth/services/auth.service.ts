import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthAPIService } from '../../services/auth-api.service';
// import { Login } from '../../models/column.model';

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
    const tokenId = window.localStorage.getItem('youtube-login');
    if (tokenId) {
      window.localStorage.removeItem('youtube-login');
      this.authState$$.next(false);
      this.router.navigate(['/auth']);
    }
  }

  comeIn() {
    if (this.login && this.password) {
      console.log(this.login, this.password);
      this.authAPIService.signIn({ login: this.login, password: this.password }).subscribe(
        map((user) => {
          console.log('u', user);
        }),
      );
      // window.localStorage.setItem('youtube-login', 'tokenId');
      // this.router.navigate(['']);
      // this.authState$$.next(true);
    }
  }

  isLogged() {
    if (window.localStorage.getItem('youtube-login')) {
      this.authState$$.next(true);
      return true;
    }
    return false;
  }
}
