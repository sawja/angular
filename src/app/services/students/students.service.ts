import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from '../../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[]

  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get("http://localhost:3000/students")
  }

  postStudents(body) {
    return this.http.post("http://localhost:3000/students", body)
  }

  deleteStudents(id) {
    return this.http.delete("http://localhost:3000/students/" + id, {})
  }

  updateStudent(id, body) {
    return this.http.patch("http://localhost:3000/students/" + id, body)
  }
}
