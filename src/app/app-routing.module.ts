import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { DebtCustomerComponent } from './pages/debt-customer/debt-customer.component';
import { DebtComponent } from './pages/debt/debt.component';
import { FormRenderningComponent } from './pages/form-renderning/form-renderning.component';
import { GameControlComponent } from './pages/game-control/game-control.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'debt',
    component: DebtComponent,
  },
  {
    path: 'debt-customer',
    component: DebtCustomerComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'venue',
    loadChildren: () =>
      import('./pages/venue/venue.module').then((m) => m.VenueModule),
  },

  {
    path: 'form',
    component: FormRenderningComponent,
  },

  {
    path: 'control',
    component: GameControlComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
