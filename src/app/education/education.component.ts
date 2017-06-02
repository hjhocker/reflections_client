import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  utLogo: string;
  uthscLogo: string;

  constructor() { }

  ngOnInit() {
    this.utLogo = "/assets/images/GSBS_min_5c_cobrand_lrg.png"
    this.uthscLogo = "/assets/images/Texas_Longhorn_logo.svg.png"
  }

}
