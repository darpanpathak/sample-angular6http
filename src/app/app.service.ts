import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geomdata } from './geomdata';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<Geomdata[]>('../assets/sampledata.json')
  }

}
