import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  template: `<h2>{{getTitle()}}</h2>
  <ul>
  <li *ngFor="let course of courses" >{{course}}</li>
  </ul>`,
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  title = "List of Courses";
  courses = [];
  //dependency injaction
  constructor(service: CoursesService) {
    this.courses = service.getCourses();

  }

  ngOnInit() {
  }
  getTitle() {
    return this.title;
  }
}
