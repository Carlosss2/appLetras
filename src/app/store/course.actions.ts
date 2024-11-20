// src/app/store/course.actions.ts

import { createAction, props } from '@ngrx/store';
import { Video } from './course.state';

export const loadVideos = createAction('[Course] Load Videos');

export const loadVideosSuccess = createAction(
  '[Course] Load Videos Success',
  props<{ videos: Video[] }>()
);

export const loadVideosFailure = createAction(
  '[Course] Load Videos Failure',
  props<{ error: string }>()
);

export const selectVideo = createAction(
  '[Course] Select Video',
  props<{ video: Video }>()
);
