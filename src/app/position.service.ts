import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

import { Position } from './position';

@Injectable()
export class PositionService {

  private url = "https://web422-app.herokuapp.com";

  constructor(private http: HttpClient) { }

  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>("https://web422-app.herokuapp.com/positions")
  }

}
