import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Injectable()
export class AuthGuard {
  constructor(private router: Router,
              private auth: AuthService) {}

  canActivate(): boolean {
      if (this.auth.loggedIn()) {
        return true;
      } else {
        this.router.navigate(['/auth']);
        return false;
      }
    }
}
