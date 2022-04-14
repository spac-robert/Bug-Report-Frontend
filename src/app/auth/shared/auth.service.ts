import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { LoginRequest } from '../login-request';
import { LoginResponse } from '../login-response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpsClient: HttpClient) { 

  }

  login(loginRequest:LoginRequest){
    this.httpsClient.post<LoginResponse>('http://localhost:8080/login',loginRequest);
  }
}
