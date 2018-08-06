import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() student: Student
  @Input() selectedId: string


  computeAverage(grades) {
    const sum = grades.reduce((a, b) => {return a + b})
    const avg = sum / grades.length
    return avg
  }

}
