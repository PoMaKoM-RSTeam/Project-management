import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilesAPIService {
  constructor(private http: HttpClient) {}

  headers = (auth_token: string, contentType: string) => ({
    headers: new HttpHeaders({
      'Content-Type': contentType,
      Authorization: `Bearer ${auth_token}`,
    }),
  });

  downloadFile(taskid: string, filename: string, auth_token: string) {
    return this.http.get(`/file/${taskid}/${filename}`, this.headers(auth_token, 'application/json'));
  }

  uploadFile(taskid: string, file: any, auth_token: string) {
    const body = { taskid, file };
    return this.http.post(`/file/`, body, this.headers(auth_token, 'multipart/form-data'));
  }
}
