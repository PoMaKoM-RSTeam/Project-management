import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Column } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class ColumnsAPIService {
  constructor(private http: HttpClient) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  getAllColumns(boardId: string): Observable<Column[]> {
    return this.http.get<Column[]>(`${environment.apiURL}/boards/${boardId}/columns`, this.headers);
  }

  createColumn(boardId: string): Observable<Column[]> {
    const body = { boardId };
    return this.http.post<Column[]>(`${environment.apiURL}/boards/columns`, body, this.headers);
  }

  getColumnByID(boardId: string, columnId: string): Observable<Column[]> {
    return this.http.get<Column[]>(`${environment.apiURL}/boards/${boardId}/columns/${columnId}`, this.headers);
  }

  deleteColumn(boardId: string, columnId: string): Observable<Column[]> {
    return this.http.delete<Column[]>(`${environment.apiURL}/boards/${boardId}/columns/${columnId}`, this.headers);
  }

  updateColumn(boardId: string, columnId: string, data: Column[]): Observable<Column[]> {
    return this.http.put<Column[]>(`${environment.apiURL}/boards/${boardId}/columns/${columnId}`, data, this.headers);
  }
}
