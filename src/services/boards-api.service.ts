/* eslint-disable max-len */
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

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4MWUxMGExNC1mN2Q3LTQ0MTYtOGJmOS1hYjVmZmUzZjMyMTIiLCJsb2dpbiI6InVzZXIwMDEiLCJpYXQiOjE2NTE0MjgxMDZ9.ZmSzIt14wNdi_-pxgrn88d9peWn3BJHEK2CkmS3snVQ`,
    }),
  };

  headersWithoutJson = {
    headers: new HttpHeaders({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4MWUxMGExNC1mN2Q3LTQ0MTYtOGJmOS1hYjVmZmUzZjMyMTIiLCJsb2dpbiI6InVzZXIwMDEiLCJpYXQiOjE2NTE0MjgxMDZ9.ZmSzIt14wNdi_-pxgrn88d9peWn3BJHEK2CkmS3snVQ`,
    }),
  };

  getAllBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.apiURL}/boards`, this.headers);
  }

  getBoardByID(id: string): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.apiURL}/boards/${id}`, this.headers);
  }

  createBoard(title: string): Observable<Board> {
    const body = { title };
    return this.http.post<Board>(`${environment.apiURL}/boards`, body, this.headers);
  }

  deleteBoard(id: string): Observable<null> {
    return this.http.delete<null>(`${environment.apiURL}/boards/${id}`, this.headersWithoutJson);
  }

  updateBoard(id: string, data: BoardEdit): Observable<Board> {
    return this.http.put<Board>(`${environment.apiURL}/boards/${id}`, data, this.headers);
  }
}
