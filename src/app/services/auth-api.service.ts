import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ISignInResponse, ISignUnResponse, Login, User } from '../models/column.model';
import { Message } from '../../constants/enums';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIService {
  constructor(private http: HttpClient, private message: NzMessageService) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  signIn(user: Login): Observable<any> {
    const body = { login: user.login, password: user.password };
    return this.http.post<ISignInResponse>(`${environment.apiURL}/signin`, body, this.headers).pipe(
      map((data) => {
        this.message.create(Message.SUCCESS, `Welcome, ${user.login}!`);
        return data;
      }),
      catchError((err) => {
        this.message.create(Message.ERROR, err?.error?.message);
        return err;
      }),
    );
  }

  signUp(user: User): Observable<ISignUnResponse> {
    const body = { name: user.name, login: user.login, password: user.password };
    return this.http.post<ISignUnResponse>(`${environment.apiURL}/signup`, body, this.headers);
  }
}
