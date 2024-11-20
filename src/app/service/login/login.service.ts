import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from '../../models/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/auth/login/teachers'; // URL de la API de autenticación

  constructor(private http: HttpClient) {}

  // Método para enviar las credenciales de login al servidor
  loginUser(loginData: Login): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(this.apiUrl, loginData).pipe(
      tap((response) => {
        localStorage.setItem('access_token',response.token)
        console.log("access", response.token)
      }
      ))



  }

  // Método para cerrar sesión
  logoutUser(): void {
    localStorage.removeItem('authToken');
  }

  // Método para almacenar el token en el localStorage
  storeToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Método para obtener el token desde el localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Verifica si el usuario está autenticado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
