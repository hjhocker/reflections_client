import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  str = "80";
  parsedStr = parseInt(str);
  quarter = parsedStr / 4;

  if (parsedStr < 10) {
    // ...
  }

  ngOnInit() {
  }

}
