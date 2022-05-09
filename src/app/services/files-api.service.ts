import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FilesAPIService {
  constructor(private http: HttpClient) {}

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.auth_token}`,
    }),
  };

  downloadFile(taskid: string, filename: string) {
    return this.http.get(`/file/${taskid}/${filename}`, this.headers);
  }

  uploadFile(taskid: string, file: any) {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${environment.auth_token}`,
      }),
    };
    const body = { taskid, file };
    return this.http.post(`/file/`, body, this.headers);
  }
}
