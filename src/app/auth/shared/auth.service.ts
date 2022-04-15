import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {LoginRequest, Role, User} from '../login-request';
import {LoginResponse} from '../login-response';
import {firstValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpsClient: HttpClient) {

  }

  public login(loginRequest: LoginRequest): Promise<User> {
    return firstValueFrom(this.httpsClient.post<LoginResponse>('http://localhost:8080/login', loginRequest))
      .then((resp: LoginResponse) => {
        return new User(resp.email, this.getRole(resp.authToken));
      })
  }

  private getRole(token: string): Role {
    const parsed = this.parseJwt(token);
    const index = Object.values(Role).indexOf(parsed.role)
    return Object.keys(Role)[index] as Role;
  }


  private parseJwt(token: string){
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
}
