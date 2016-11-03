import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class PlanetsService {

  constructor(private http:Http) {}

  getPlanets(){
    return this.http.get('http://swapi.co/api/planets/').map(res => res.json());
  }

}
