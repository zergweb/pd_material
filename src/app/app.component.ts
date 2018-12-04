import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  login() {
    this.authenticationService.login("name", "12345");
    this.router.navigate(['/lk']);
  }

}
