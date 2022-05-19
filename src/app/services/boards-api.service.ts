import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Board, BoardEdit } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class BoardsAPIService {
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

  getAllBoards(auth_token: string): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.apiURL}/boards`, this.headers(auth_token));
  }

  getBoardByID(id: string, auth_token: string): Observable<Board> {
    return this.http.get<Board>(`${environment.apiURL}/boards/${id}`, this.headers(auth_token));
  }

  createBoard(title: string, auth_token: string): Observable<Board> {
    const body = { title };
    return this.http.post<Board>(`${environment.apiURL}/boards`, body, this.headers(auth_token));
  }

  deleteBoard(id: string, auth_token: string): Observable<null> {
    return this.http.delete<null>(`${environment.apiURL}/boards/${id}`, this.headersWithoutJson(auth_token));
  }

  updateBoard(id: string, data: BoardEdit, auth_token: string): Observable<Board> {
    return this.http.put<Board>(`${environment.apiURL}/boards/${id}`, data, this.headers(auth_token));
  }
}
