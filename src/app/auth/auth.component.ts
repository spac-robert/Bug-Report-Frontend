import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import { LoginRequest, User } from '../dto/login-request';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm!: FormGroup;
  loginRequest: LoginRequest

  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.loginRequest = {
      email: ' ',
      password: ' '
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login(): void {
    this.loginRequest.email = this.loginForm.get('email')!.value;
    this.loginRequest.password = this.loginForm.get('password')!.value;

    this.authService.login(this.loginRequest)
      .then((user: User) => {
        if (user.isProgrammer()) {
          this.router.navigateByUrl('/homepage-programmer');
        }
        if (user.isTester()) {
          this.router.navigateByUrl('/homepage-tester');
        }
        if (user.isAdmin()) {
          this.router.navigateByUrl('/homepage-admin');
        }
      })
  }
}
