import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { LocationsDetailComponent } from './components/locations-detail/locations-detail.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationsDetailComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
