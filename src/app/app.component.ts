import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Geomdata } from "./geomdata";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'moveinsync';
  private data: Array<Geomdata> = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.getFullData();
  }

  getFullData() {
    this.appService.getData().subscribe((gdata: Geomdata[]) => {
      this.data = gdata;
      console.log(gdata);
    });
  }

}
