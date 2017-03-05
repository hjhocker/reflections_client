import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})

export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Skill {
  name: string;
  yearsOfExperience: number;
  proficiency: string;
}
