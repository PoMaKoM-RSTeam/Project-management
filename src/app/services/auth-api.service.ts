import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login, User } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class AuthAPIService {
  constructor(private http: HttpClient) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  signIn(user: Login) {
    const body = { login: user.login, password: user.password };
    return this.http.post<any>(`${environment.apiURL}/signin`, body, this.headers);
  }

  signUp(user: User) {
    const body = { name: user.name, login: user.login, password: user.password };
    return this.http.post<User[]>(`${environment.apiURL}/signup`, body, this.headers);
  }
}
