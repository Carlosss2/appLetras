import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter.actions'; // Acciones
import { selectCounter } from '../../store/counter.selectors'; // Selector
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [CommonModule],
})
export class CounterComponent {
  count$: Observable<number>; // Observable del estado del contador

  constructor(private store: Store<{ counter: number }>) {
    // Conectar el selector al estado
    this.count$ = this.store.select(selectCounter);
  }

  increment() {
    this.store.dispatch(increment()); // Despachar acción de incremento
  }

  decrement() {
    this.store.dispatch(decrement()); // Despachar acción de decremento
  }

  reset() {
    this.store.dispatch(reset()); // Despachar acción de reset
  }
}
