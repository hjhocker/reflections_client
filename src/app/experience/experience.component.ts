import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Skill } from './skill'

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  skills: Skill[];

  constructor(private http: Http) { }

  ngOnInit() {this.getSkills()}

  getSkills() {
    this.http.get(environment.apiUrl + '/api/skills')
                .map(this.extractSkills)
                .catch(this.handleError)
                .subscribe((data) => this.skills = data);
  }

  private extractSkills(res: Response) {
    return res.json();
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
