import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from '../../models/student'
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { StudentsService } from '../../services/students/students.service'

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  myForm: FormGroup;
  @Output() submitEvent: EventEmitter<Object> = new EventEmitter<Object>();

  constructor(private formBuilder: FormBuilder, private studentsService: StudentsService) {
    this.myForm = formBuilder.group({
      'firstName': [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(2)])],
      'lastName': [null, Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/), Validators.minLength(2)])],
      'index': [null, Validators.compose([Validators.required, Validators.pattern(/^[0-9]*$/), Validators.minLength(5), Validators.maxLength(5)])],
      'groupNumber': [null, Validators.compose([Validators.required, Validators.min(19), Validators.max(35)])]
    })
   }

  ngOnInit() {
    
  }

  addStudent(formValue) {
    this.submitEvent.emit(formValue)
  }

  


}
