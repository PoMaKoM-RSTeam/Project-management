import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ILogin, ISignInResponse, ISignUpResponse, ISignUp } from '../models/column.model';
import { Message } from '../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  signIn(user: ILogin): Observable<any> {
    const body = { login: user.login, password: user.password };
    return this.http.post<ISignInResponse>(`${environment.apiURL}/signin`, body, this.headers).pipe(
      map((data) => {
        this.message.create(Message.SUCCESS, `Welcome, ${user.login}!`);
        return data;
      }),
      catchError((err) => {
        this.message.create(Message.ERROR, err?.error?.message);
        return of(false);
      }),
    );
  }

  signUp(user: ISignUp): Observable<any> {
    const body = { name: user.name, login: user.login, password: user.password };
    return this.http.post<ISignUpResponse>(`${environment.apiURL}/signup`, body, this.headers).pipe(
      map((data) => data),
      catchError((err) => {
        this.message.create(Message.ERROR, err?.error?.message);
        return of(false);
      }),
    );
  }
}
