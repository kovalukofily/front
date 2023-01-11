import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {
  }

  getDepartures(): Observable<any> {
    return this.http.get( 'https://kovalukofily-lab4.herokuapp.com/departures')
  }

  getArrivals(): Observable<any> {
    return this.http.get( 'https://kovalukofily-lab4.herokuapp.com/arrivals')
  }
}
