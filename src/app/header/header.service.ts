import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class HeaderService {

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    return this.http.get( 'https://kovalukofily-lab2.herokuapp.com/kyiv_weather')
  }
}
