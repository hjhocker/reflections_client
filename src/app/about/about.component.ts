import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  devCycle: string;

  constructor() { }

  ngOnInit() {
    this.devCycle = "/assets/images/dev_cycle.png"
  }

}
