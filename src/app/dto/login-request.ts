export interface LoginRequest {
  email: string;
  password: string;
}

export enum Role {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_PROGRAMMER = 'ROLE_PROGRAMMER',
  ROLE_TESTER = 'ROLE_TESTER',
}

export class User {

  constructor(private readonly email: string,
    private readonly role: Role) {
  }

  isAdmin(): boolean {
    return this.role === Role.ROLE_ADMIN;
  }

  isProgrammer(): boolean {
    return this.role === Role.ROLE_PROGRAMMER;
  }

  isTester(): boolean {
    return this.role === Role.ROLE_TESTER;
  }

}

export class RegisterUser {
  constructor(
    private readonly username: string,
    private readonly email: string,
    private readonly role: Role) {
  }
}