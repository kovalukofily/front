import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ContentService} from '../content/content.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  weather: Observable<any>

  constructor(public contentService: ContentService) { }

  ngOnInit(): void {
    this.weather = this.contentService.getWeather()
  }

}
