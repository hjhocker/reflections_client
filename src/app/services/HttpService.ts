import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  get(url) {
    return this.http.get(environment.apiUrl + url);
  }

}
