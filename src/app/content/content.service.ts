import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) {
  }

  getWeather(): Observable<any> {
    // const headerDict = {
    //   Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    // }
    //
    // const requestOptions = {
    //   headers: new HttpHeaders(headerDict),
    // };
    return this.http.get( 'https://kovalukofily-backend.herokuapp.com/kyiv_weather')
  }
}
