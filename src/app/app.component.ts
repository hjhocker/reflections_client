import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Http, Response } from '@angular/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string;
  enableMl: boolean;

  constructor(private http: Http) {}

  ngOnInit() {
    this.getName();
    this.showMl();
  }

  showMl() {
    this.enableMl = environment.showMl;
  }

  getName() {
    this.http.get(environment.apiUrl + '/api/name/firstlast')
                .map(this.extractName)
                .catch(this.handleError)
                .subscribe((data) => this.name = data);
  }

  private extractName(res: Response) {
    let name = res.text();
    return name || '--';
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  clicked(event) {
    console.log("clicked on about this site");
  }

}
