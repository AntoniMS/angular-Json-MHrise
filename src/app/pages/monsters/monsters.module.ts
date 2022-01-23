import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MonstersRoutingModule } from './monsters-routing.module';
import { MonstersComponent } from './monsters.component';
import { MonstersDetailComponent } from './components/monsters-detail/monsters-detail.component';
//import { MonstersDetailComponent } from './components/monsters-detail/monsters-detail.component';


@NgModule({
  declarations: [
    MonstersComponent,
    MonstersDetailComponent,
    //MonstersDetailComponent
  ],
  imports: [
    CommonModule,
    MonstersRoutingModule,
    HttpClientModule
  ]
})
export class MonstersModule { }
