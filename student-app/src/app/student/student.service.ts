import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get<Student[]>(`${environment.baseUrl}/student`);
  }

  post(payload: Student) {
    return this.httpClient.post<Student>(
      `${environment.baseUrl}/student`,
      payload
    );
  }

  update(payload: Student) {
    return this.httpClient.put<Student>(
      `${environment.baseUrl}/student`,
      payload
    );
  }

  delete(studentId: number) {
    return this.httpClient.delete(
      `${environment.baseUrl}/student?id=${studentId}`
    );
  }
}
