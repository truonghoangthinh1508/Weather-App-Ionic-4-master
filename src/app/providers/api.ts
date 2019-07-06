import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL, TOKEN } from '../constants/api';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any) {
    let paramsQuery = '?';
    for (let k in params) {
      paramsQuery += `&${k}=${params[k]}`;
    }
    paramsQuery += '&mode=json';
    paramsQuery += `&appid=${TOKEN}`;
    return this.http.get(BASE_URL + '/' + endpoint + paramsQuery);
  }

}