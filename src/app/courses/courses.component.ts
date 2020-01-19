import { LogService } from './../log.service';
import { CoursesService } from './courses.service';
import { Component, OnInit, Optional } from '@angular/core';

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

  constructor(private logger: LogService, service: CoursesService) {
    this.courses = service.getCourses();

  }
  private getTitle() {
    this.logger.info(this.title, this.courses);
  }
}
