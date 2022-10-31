import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {HeaderService} from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  weather: Observable<any>

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    this.weather = this.headerService.getWeather()
  }

}
