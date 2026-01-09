import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../shared/routes.constants';

@Component({
  selector: 'app-services-catalog',
  standalone: true,
  templateUrl: './services-catalog.html',
  styleUrl: './services-catalog.scss',
  imports: [RouterModule],
})
export class ServicesCatalog {
  readonly ROUTES = ROUTES;
}
