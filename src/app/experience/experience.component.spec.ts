import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes  } from '@angular/router';
import { ExperienceComponent } from './experience.component';

import { MockBackend } from '@angular/http/testing';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Http, useClass: MockBackend}],
      declarations: [ ExperienceComponent ],
      imports: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
