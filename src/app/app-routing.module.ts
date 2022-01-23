import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `extras`, loadChildren: () =>
      import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: `monsters`, loadChildren: () =>
      import('./pages/monsters/monsters.module').then(m => m.MonstersModule)
  },
  {
    path: `locations`, loadChildren: () =>
      import('./pages/locations/locations.module').then(m => m.LocationsModule)
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
