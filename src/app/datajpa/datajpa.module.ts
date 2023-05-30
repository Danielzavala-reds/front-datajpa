import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatajpaRoutingModule } from './datajpa-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../material/material.module';
import { NewClientComponent } from './pages/new-client/new-client.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListComponent,
    NewClientComponent
  ],
  imports: [
    CommonModule,
    DatajpaRoutingModule,
    MaterialModule,
  ]
})
export class DatajpaModule { }
