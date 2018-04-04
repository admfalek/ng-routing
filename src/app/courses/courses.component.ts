import { Component, OnInit } from '@angular/core';
import { DataBaseService, Course } from '../data-base.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Array<Course>;
  constructor(private dbService: DataBaseService) { }

  ngOnInit() {
      this.dbService.getCourses().subscribe(list => {
          this.courses = list;
      });
  }

}
