import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../service/register/register.service';  // Asegúrate de importar el servicio correctamente
import { Register } from '../../models/register/register'; // Asegúrate de que el modelo esté bien importado

@Component({
  selector: 'app-sign-in-teacher',
  templateUrl: './sign-in-teacher.component.html',
  styleUrls: ['./sign-in-teacher.component.scss']
})
export class SignInTeacherComponent implements OnInit {

  inputName!: HTMLInputElement;
  inputEmail!: HTMLInputElement;
  inputPassword!: HTMLInputElement;

  constructor(private router: Router, private registerService: RegisterService) {}

  ngOnInit(): void {
    // Inicializando las referencias a los inputs
    this.inputName = document.getElementById('name') as HTMLInputElement;
    this.inputEmail = document.getElementById('email') as HTMLInputElement;
    this.inputPassword = document.getElementById('password') as HTMLInputElement;
  }

  routeLogin(): void {
    const username = this.inputName.value;
    const email = this.inputEmail.value;
    const password = this.inputPassword.value;

    // Crear un objeto con los datos del formulario
    const registerData: Register = {
      name: username,
      email: email,
      password: password,
      token: '' 
    };

    // Usar el servicio para registrar el usuario
    this.registerService.registerUser(registerData).subscribe(
      () => {
        console.log('Usuario registrado con éxito');
        this.router.navigate(['/loginTeacher']);
      },
      (error: any) => {
        console.error('Error al registrar al usuario', error);
      }
    );
  }
}
