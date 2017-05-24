import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  str = "80";
  quarter = str / 4; // Noncompliant

  if (str < 10) { // Noncompliant
     str = "90";
  }

  ngOnInit() {
  }

}
