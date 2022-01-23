import { MonstersDetailComponent } from './components/monsters-detail/monsters-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstersComponent } from './monsters.component';

const routes: Routes = [
  {path: "", component: MonstersComponent},
  {path: ":idMonster", component: MonstersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonstersRoutingModule { }
