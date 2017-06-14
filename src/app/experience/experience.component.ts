import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../services/HttpService';
import { Skill } from './skill';

import { Response } from '@angular/http';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  skills: Skill[];
  httpService: HttpService;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.httpService.get('/api/skills')
                    .map(this.extractSkills)
                    .subscribe((data) => this.skills = data);
  }

  private extractSkills(res: Response) {
    return res.json();
  }


}
