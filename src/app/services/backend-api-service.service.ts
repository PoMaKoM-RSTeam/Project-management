import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Board, Column, User, Task } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class BackendAPIService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  constructor(private http: HttpClient) {}

  authorization() {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiURL}/users`, this.headers);
  }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.apiURL}/boards`, this.headers);
  }

  getBoard(id: string): Observable<Board[]> {
    return this.http.get<Board[]>(`${environment.apiURL}/boards/${id}`, this.headers);
  }

  getColumns(boardId: string): Observable<Column[]> {
    return this.http.get<Column[]>(`${environment.apiURL}/boards/${boardId}/columns`, this.headers);
  }

  getColumn(boardId: string, columnId: string): Observable<Column[]> {
    return this.http.get<Column[]>(`${environment.apiURL}/boards/${boardId}/columns/${columnId}`, this.headers);
  }

  getTasks(boardId: string, columnId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks`, this.headers);
  }

  getTask(boardId: string, columnId: string, taskId: string): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      this.headers,
    );
  }

  // uploadFile(taskId: string, file: BinaryType) {
  //   return this.http.post<Board[]>(`${environment.apiURL}/file`, this.headers);
  // }

  downloadFile(taskid: string, filename: string) {
    return this.http.get<Board[]>(`/file/${taskid}/${filename}`, this.headers);
  }
}

// https://juristr.com/blog/2016/11/configure-proxy-api-angular-cli/
