import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from '../../shared/routes.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true,
  imports: [RouterModule],
})
export class Home {
  readonly ROUTES = ROUTES;
}
