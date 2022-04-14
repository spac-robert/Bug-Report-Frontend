export interface LoginResponse {
    authToken: string,
    refreshToken: string,
    expiresAs: Date,
    email: string;
}