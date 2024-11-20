import { createSelector } from '@ngrx/store';

// Define la interfaz del estado global
interface AppState {
  counter: number;
}

// Selector para obtener el estado del contador
export const selectCounter = (state: AppState) => state.counter;
