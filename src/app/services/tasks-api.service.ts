import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../models/column.model';

@Injectable({
  providedIn: 'root',
})
export class TasksAPIService {
  constructor(private http: HttpClient) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  getAllTasks(boardId: string, columnId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks`, this.headers);
  }

  createTask(boardId: string, columnId: string, data: any): Observable<Task[]> {
    const body = { data };
    return this.http.post<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks`,
      body,
      this.headers,
    );
  }

  getTaskByID(boardId: string, columnId: string, taskId: string): Observable<Task[]> {
    return this.http.get<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      this.headers,
    );
  }

  deleteTask(boardId: string, columnId: string, taskId: string): Observable<Task[]> {
    return this.http.delete<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      this.headers,
    );
  }

  updateTask(boardId: string, columnId: string, taskId: string, data: Task[]): Observable<Task[]> {
    return this.http.put<Task[]>(
      `${environment.apiURL}/boards/${boardId}/columns/${columnId}/tasks/${taskId}`,
      data,
      this.headers,
    );
  }
}
