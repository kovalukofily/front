import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    const headerDict = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this.http.get( 'https://kovalukofily-backend.herokuapp.com/kyiv_weather', requestOptions)
  }
}
