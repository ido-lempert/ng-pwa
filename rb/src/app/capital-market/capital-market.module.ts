import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalMarketRoutingModule } from './capital-market-routing.module';
import { CapitalMarketComponent } from './capital-market.component';

@NgModule({
  declarations: [CapitalMarketComponent],
  imports: [CommonModule, CapitalMarketRoutingModule],
})
export class CapitalMarketModule {}
