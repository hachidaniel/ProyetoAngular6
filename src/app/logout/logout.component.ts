import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  template:  `
   <p>
    Loggin out...
  </p>
  `,
  styles:[],
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authServices: AuthService) { }

  ngOnInit() {
    this.authServices.logout();
    this.router.navigate(['/']);
  }

}
