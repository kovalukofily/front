import { Component, OnInit } from '@angular/core'
import {ContentService} from './content.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-body',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'city', 'number', 'time']
  departureDataSource: MatTableDataSource<any>
  arrivalDataSource: MatTableDataSource<any>

  constructor(public contentService: ContentService) {
    this.departureDataSource = new MatTableDataSource()
    this.arrivalDataSource = new MatTableDataSource()
  }

  ngOnInit(): void {
    this.contentService.getArrivals().subscribe(data => {
      this.arrivalDataSource.data = data.flights
    })

    this.contentService.getDepartures().subscribe(data => {
      this.departureDataSource.data = data.flights
    })
  }

}
