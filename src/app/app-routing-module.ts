import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookingCalendar } from './components/booking-calendar/booking-calendar';
import { About } from './components/about/about';
import { ServiceCatalog } from './components/service-catalog/service-catalog';

const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'booking',
    component: BookingCalendar,
  },
  {
    path: 'services',
    component: ServiceCatalog,
  },
  {
    path: 'about',
    component: About,
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
