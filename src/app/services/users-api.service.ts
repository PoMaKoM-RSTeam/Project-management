import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class UsersAPIService {
  constructor(private http: HttpClient) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiURL}/users`, this.headers);
  }

  getUserByID(userID: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiURL}/users/${userID}`, this.headers);
  }

  deleteUser(userID: string) {
    return this.http.delete<Task[]>(`${environment.apiURL}/users/${userID}`, this.headers);
  }

  updateUser(userID: string, data: User) {
    return this.http.put<Task[]>(`${environment.apiURL}/users/${userID}`, data, this.headers);
  }
}
