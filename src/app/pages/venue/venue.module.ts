import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueListComponent } from './venue-list/venue-list.component';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [
  {
    path: ':id',
    component: VenueListComponent
  }  
];

 
 

@NgModule({
  declarations: [
    VenueListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule, 
  ]
})
export class VenueModule { }
