import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.css']
})

export class SideNavComponent {
  constructor(private auth: AuthService,
    private router: Router) {}

logout() {
this.auth.clear();
this.router.navigateByUrl('/');
}

toggle: boolean = false;

toggleClass() {
  this.toggle = !this.toggle;
}
}