import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ExperienceComponent } from './experience/experience.component';
import { SkillComponent } from './skill/skill.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
});
