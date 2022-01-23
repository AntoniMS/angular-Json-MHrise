import { Component, OnInit } from '@angular/core';
import { LocationInterface } from './models/Location';
import { LocationsService } from './services/locations.service';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
public locations: LocationInterface[] = []
  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.locationsService.getAllLocations().subscribe((data:any) => {
      const apiResults: LocationInterface[] = data;

      const formattedLocations = apiResults.map(({id, name, description, image, map})=> ({
        id, name, description, image, map
      }));
      this.locations = formattedLocations
    })
  }

}
