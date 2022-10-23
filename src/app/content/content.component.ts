import { Component, OnInit } from '@angular/core'
import {ContentService} from './content.service';

@Component({
  selector: 'app-body',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  displayedColumns: string[] = []
  dataSource: any

  constructor(public contentService: ContentService) {

  }

  ngOnInit(): void {
    this.contentService.getWeather().subscribe(console.log)
  }

}
