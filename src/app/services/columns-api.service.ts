import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Column, IColumnPost } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class ColumnsAPIService {
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

  getAllColumns(boardId: string, auth_token: string): Observable<Column[]> {
    return this.http.get<Column[]>(`${environment.apiURL}/boards/${boardId}/columns`, this.headers(auth_token));
  }

  createColumn(body: IColumnPost, boardId: string, auth_token: string): Observable<Column> {
    return this.http.post<Column>(`${environment.apiURL}/boards/${boardId}/columns`, body, this.headers(auth_token));
  }

  getColumnByID(boardId: string, columnId: string, auth_token: string): Observable<Column[]> {
    return this.http.get<Column[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}`,
      this.headers(auth_token),
    );
  }

  deleteColumn(boardId: string, columnId: string, auth_token: string): Observable<null> {
    return this.http.delete<null>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}`,
      this.headersWithoutJson(auth_token),
    );
  }

  updateColumn(boardId: string, columnId: string, data: IColumnPost, auth_token: string): Observable<Column> {
    return this.http.put<Column>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}`,
      data,
      this.headers(auth_token),
    );
  }
}
