import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task, TaskPost, TaskPut } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class TasksAPIService {
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

  getAllTasks(boardId: string, columnId: string, auth_token: string): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks`,
      this.headers(auth_token),
    );
  }

  createTask(boardId: string, columnId: string, body: TaskPost, auth_token: string): Observable<Task> {
    return this.http.post<Task>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks`,
      body,
      this.headers(auth_token),
    );
  }

  getTaskByID(boardId: string, columnId: string, taskId: string, auth_token: string): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      this.headers(auth_token),
    );
  }

  deleteTask(boardId: string, columnId: string, taskId: string, auth_token: string): Observable<null> {
    return this.http.delete<null>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      this.headersWithoutJson(auth_token),
    );
  }

  updateTask(boardId: string, columnId: string, taskId: string, data: TaskPut, auth_token: string): Observable<Task> {
    return this.http.put<Task>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      data,
      this.headers(auth_token),
    );
  }
}
