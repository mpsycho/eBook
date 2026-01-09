import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES} from '../../shared/routes.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [RouterModule],
})
export class Header {
  readonly ROUTES = ROUTES;
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
