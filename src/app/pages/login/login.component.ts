import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  onLogin(): void {
    // console.log('log in clicked');
    this.authService.isLoggedIn = !this.authService.isLoggedIn;
    // console.log(this.authService.isLoggedIn, 'is logged in');
    if (this.authService.isLoggedIn) this.router.navigate(['']);
  }
}
