import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserPut } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class UsersAPIService {
  constructor(private http: HttpClient) {}

  headers = (auth_token: string) => ({
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    }),
  });

  headersWithoutJson = (auth_token: string) => ({
    headers: new HttpHeaders({
      Authorization: `Bearer ${auth_token}`,
    }),
  });

  getAllUsers(auth_token: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiURL}/users`, this.headers(auth_token));
  }

  getUserByID(userID: string, auth_token: string): Observable<User> {
    return this.http.get<User>(`${environment.apiURL}/users/${userID}`, this.headers(auth_token));
  }

  deleteUser(userID: string, auth_token: string): Observable<null> {
    return this.http.delete<null>(`${environment.apiURL}/users/${userID}`, this.headersWithoutJson(auth_token));
  }

  updateUser(userID: string, data: UserPut, auth_token: string): Observable<User> {
    return this.http.put<User>(`${environment.apiURL}/users/${userID}`, data, this.headers(auth_token));
  }
}
