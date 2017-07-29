import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../services/HttpService';
import { Iris } from '../models/Iris';

import { Response } from '@angular/http';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent implements OnInit {
  httpService: HttpService;
  irisData: Iris[];

  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  ngOnInit() {
    this.httpService.getFromServer('http://localhost:8000', '/iris/data')
                    .map(this.extractIrisData)
                    .subscribe((data) => this.irisData = data);
    console.log(this.irisData);
  }

  private extractIrisData(res: Response) {
    return res.json();
  }

}
