import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login-teacher',
  standalone: true,
  imports: [CommonModule, NgxSpinnerModule],
  templateUrl: './login-teacher.component.html',
  styleUrls: ['./login-teacher.component.scss']
})
export class LoginTeacherComponent {
  email: string = ''; 
  password: string = ''; 
  modalMessage: string = ''; 

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private loginService: LoginService
  ) {}

  
  routeHome(event: Event): void {
    event.preventDefault(); // Evita la recarga de la página
  
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const password = (document.getElementById('password') as HTMLInputElement).value.trim();
  
    if (!email || !password) {
      this.modalMessage = 'Debe llenar todos los campos.';
      this.mostrarModal();
      return;
    }
  
    this.spinner.show();
  
    this.loginService.loginUser({ email, password }).subscribe(
      (response: { token: string }) => {
        console.log('Usuario autenticado');
        this.loginService.storeToken(response.token);
  
        this.router.navigate(['/homeTeacher']);
        this.spinner.hide();
      },
      (error) => {
        console.error('Error en el login:', error);
        this.mostrarModal();
        this.spinner.hide();
      }
    );
  }
  
  
  mostrarModal(): void {
    const modal = document.getElementById('errorModal')!;
    modal.style.display = 'flex';
  }

  
  closeModal(): void {
    const modal = document.getElementById('errorModal')!;
    modal.style.display = 'none';
  }
}