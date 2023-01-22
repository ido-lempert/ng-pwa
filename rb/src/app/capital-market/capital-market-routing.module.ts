import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CapitalMarketComponent} from "./capital-market.component";

const routes: Routes = [
  {path: '', component: CapitalMarketComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapitalMarketRoutingModule { }
