import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginResponse } from '../../dto/login-response';
import { firstValueFrom, Observable } from 'rxjs';
import { RegisterRequest } from 'src/app/dto/register-request';
import { LoginRequest, Role, User } from 'src/app/dto/login-request';
import { RegisterResponse } from 'src/app/dto/register-response';
import { Bug } from 'src/app/models/Bug';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpsClient: HttpClient) {

  }
  public async login(loginRequest: LoginRequest): Promise<User> {
    const resp = await firstValueFrom(this.httpsClient.post<LoginResponse>('http://localhost:8080/login', loginRequest));
    let user = new User(resp.email, this.getRole(resp.authToken));
    localStorage.setItem('userData', JSON.stringify(user));
    return user;
  }

  private getRole(token: string): Role {
    const parsed = this.parseJwt(token);
    const index = Object.values(Role).indexOf(parsed.role)
    return Object.keys(Role)[index] as Role;
  }


  private parseJwt(token: string) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  public async register(registerRequest: RegisterRequest): Promise<any> {
    debugger;
    const resp = await firstValueFrom(this.httpsClient.post<RegisterResponse>('http://localhost:8080/register', registerRequest));
    if (resp.error === true) {
      //trebuie sa fac display la un mesaj de eroare daca nu s-a putut inregistra
      //sau s-a putut inregistra.
    }
    return 0;
  }

  public logout(): void {
    this.httpsClient.get<any>('http://localhost:8080/register')
  }

  public autoLogin() {
    let userDate: { email: string; _token: string } = JSON.parse(localStorage.getItem('userData')!);
    if (!userDate) {
      return;
    }
    let user = new User(userDate.email, this.getRole(userDate._token));
  }
}
