import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpService } from '../services/HttpService';
import { Iris } from '../models/Iris';
import { environment } from '../../environments/environment';

import { Response } from '@angular/http';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent implements OnInit {
  httpService: HttpService;
  irisData: Iris[];
  isIrisDataLoading: boolean;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.isIrisDataLoading = true;
  }

  ngOnInit() {
    this.isIrisDataLoading = true;
    this.httpService.getFromServer(environment.mlServer, '/iris/data')
                    .map(this.extractIrisData)
                    .subscribe(
                       (data) => {
                      this.irisData = data;
                      this.isIrisDataLoading = false;
                    }, (error) => {
                      this.irisData = [];
                      this.isIrisDataLoading = false;
                    });
  }

  private extractIrisData(res: Response) {
    return res.json();
  }

}
