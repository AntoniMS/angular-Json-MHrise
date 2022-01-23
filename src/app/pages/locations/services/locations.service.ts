import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  public locationsURL: string = "https://my-json-server.typicode.com/antoniMS/mhrapi/locations";

  constructor(private httpClient: HttpClient) { }

  public getAllLocations() {
    return this.httpClient.get(this.locationsURL)
  }

  public getLocation(idLocation: any) {
    return this.httpClient.get(`${this.locationsURL}/${idLocation}`)
  }
}
