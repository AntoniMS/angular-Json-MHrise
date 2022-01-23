import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from '../../services/locations.service';
import { LocationInterface } from '../../models/Location';

@Component({
  selector: 'app-locations-detail',
  templateUrl: './locations-detail.component.html',
  styleUrls: ['./locations-detail.component.scss'],
})
export class LocationsDetailComponent implements OnInit {
  public location!: LocationInterface;
  constructor(
    private activatedRoute: ActivatedRoute,
    private locationsService: LocationsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const idLocation = params.get('idLocation');

      this.locationsService.getLocation(idLocation).subscribe((data: any) => {
        const apiResult: LocationInterface = data;
        this.location = apiResult;
      });
    });
  }
}
