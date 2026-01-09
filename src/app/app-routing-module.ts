import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { BookingCalendar } from './components/booking-calendar/booking-calendar';
import { About } from './components/about/about';
import { ServicesCatalog } from './components/services-catalog/services-catalog';
import { ROUTE_PATHS } from './shared/routes.constants';

const routes: Routes = [
  {
    path: ROUTE_PATHS.HOME,
    component: Home,
  },
  {
    path: ROUTE_PATHS.BOOKINGS,
    component: BookingCalendar,
  },
  {
    path: ROUTE_PATHS.SERVICES,
    component: ServicesCatalog,
  },
  {
    path: ROUTE_PATHS.ABOUT,
    component: About,
  },
  {path: '**', pathMatch: 'full', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
