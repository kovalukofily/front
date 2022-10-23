import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    return this.http.get( 'https://kovalukofily-backend.herokuapp.com/kyiv_weather')
  }
}
