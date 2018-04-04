import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DataBaseService {
    COURSES = [
        new Course('1', 'java-course', 'Java course', 'Everything about java'),
        new Course('2', 'react-course', 'React course', 'Everything about React'),
        new Course('3', 'angular-course', 'Angular course', 'Everything about Angular'),
        new Course('4', 'django-course', 'Django course', 'Everything about Django')
    ];

    getCourses(): Observable<Array<Course>> {
        return Observable.of(this.COURSES);
    }

    getCourseBySlug(slug: string): Course {
        return this.COURSES.find(e => e.slug === slug);
    }
}

export class Course {
    constructor(public id: string, public slug: string, public title: string, public content: string){}
}