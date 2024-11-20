import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  // Inicializamos el contador en 0
  private counterSubject = new BehaviorSubject<number>(0);

  // Exponemos el observable para que otros componentes lo puedan suscribir
  counter$ = this.counterSubject.asObservable();

  // Método para incrementar el contador
  increment() {
    const current = this.counterSubject.value;
    this.counterSubject.next(current + 1);
  }

  // Método para decrementar el contador
  decrement() {
    const current = this.counterSubject.value;
    this.counterSubject.next(current - 1);
  }

  // Método para resetear el contador a 0
  reset() {
    this.counterSubject.next(0);
  }
}
