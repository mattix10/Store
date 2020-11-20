import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Component({
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.css']
})

export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password)
      .subscribe(response => {
        console.log(response);
        window.localStorage.setItem('token', response['token']);
        this.router.navigate(['/admin/main']);
        this.errorMessage = 'Uwierzytelnienie zakończyło się niepowodzeniem.';
      });
    } else {
      this.errorMessage = 'Nieprawidłowe dane.';
    }
  }

  logout() {}
}
