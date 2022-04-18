import { Role } from "./login-request";

export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    role:Role;
    authToken: string;
}

