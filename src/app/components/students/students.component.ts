import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students/students.service'
import { Observable } from 'rxjs'
import { Student } from '../../models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[]
  selectedStudentId: string
  showEdit: string
  searchPhrase: string

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.studentsService.getStudents().subscribe(
      (res: Student[]) => this.students = res
    )
  }

  sortByLastName() {
    this.students.sort((a, b) => {
      if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1
      else if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) return 1
      else return 0;
    })
    
  }

  sortByGroupNumber() {
    this.students.sort((a, b) => {
      if (a.groupNumber < b.groupNumber) return -1
      else if (a.groupNumber > b.groupNumber) return 1
      else return 0;
    })
  }

  changeSelected(id) {
    if (id === this.selectedStudentId) {
      this.selectedStudentId = ''
      return
    }
    this.selectedStudentId = id
  }

  changeEdit(id) {
    this.changeSelected(id)
    if (id === this.showEdit) {
      this.showEdit = ''
      return
    }
    this.showEdit = id
  }

  addStudent(eventValue) {
    this.studentsService.postStudents(eventValue).subscribe((res: any) => {
      this.students.push(res.createdStudent)
    })
  }

  deleteStudent(id, index) {
    this.studentsService.deleteStudents(id).subscribe(res => {
      this.students.splice(index, 1)
    })
  }

  updateStudent(eventValue) {
    
    const st = this.students.filter(item => item._id === this.showEdit)[0]
    const foundIndex = this.students.findIndex(item => item._id === this.showEdit)

    const id = this.showEdit
    const index = foundIndex
    console.log('id = ' + id)
    console.log('index = ' + index)

    const body = [
      { property: "firstName", value: eventValue.firstName },
      { property: "lastName", value: eventValue.lastName },
      { property: "index", value: eventValue.index },
      { property: "groupNumber", value: eventValue.groupNumber },
    ]
    
    this.studentsService.updateStudent(id, body).subscribe(res => {
      for (let opt of body) {
        this.students[index][opt.property] = opt.value
      }
    })
    
  }

}
