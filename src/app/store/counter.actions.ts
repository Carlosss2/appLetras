import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter] Increment'); // Incrementar
export const decrement = createAction('[Counter] Decrement'); // Decrementar
export const reset = createAction('[Counter] Reset'); // Resetear
