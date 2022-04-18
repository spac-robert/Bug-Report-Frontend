import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { Role } from '../dto/login-request';
import { RegisterRequest } from '../dto/register-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  registerRequest: RegisterRequest;
  logoutForm!: FormGroup;
  type!:boolean;

  public onSaveUsernameChanged(value:boolean){
    this.type = value;
}

  constructor(public authService: AuthService, public router: Router) {
    this.registerRequest = {
      username: '',
      email: '',
      password: '',
      authToken: JSON.stringify(localStorage.getItem('userData')),
      role:Role.ROLE_PROGRAMMER
    }
  }

  ngOnInit(): void {
    this.logoutForm = new FormGroup({});
    this.registerForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      role:new FormControl('', Validators.required)
    });
  }

  async register(): Promise<void> {
    this.registerRequest.username = this.registerForm.get('username')!.value;
    this.registerRequest.password = this.registerForm.get('password')!.value;
    this.registerRequest.email = this.registerForm.get('email')!.value;

    if (await this.authService.register(this.registerRequest) != 0) {
      this.authService.register(this.registerRequest);
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
    localStorage.removeItem('userData');
  }


}
