import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from '../../shared/routes.constants';

@Component({
  selector: 'app-service-catalog',
  standalone: true,
  templateUrl: './service-catalog.html',
  styleUrl: './service-catalog.scss',
  imports: [RouterModule],
})
export class ServiceCatalog {
  readonly ROUTES = ROUTES;
}
