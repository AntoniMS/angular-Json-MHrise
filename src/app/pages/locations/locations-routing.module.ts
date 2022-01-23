import { LocationsDetailComponent } from './components/locations-detail/locations-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  {path: "", component: LocationsComponent},
  {path: ":idLocation", component: LocationsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
