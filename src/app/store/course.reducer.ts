// src/app/store/course.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { loadVideos, loadVideosSuccess, loadVideosFailure, selectVideo } from './course.actions';
import { initialCourseState, CourseState } from './course.state';

export const courseReducer = createReducer(
  initialCourseState,
  on(loadVideos, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadVideosSuccess, (state, { videos }) => ({
    ...state,
    videos,
    loading: false,
  })),
  on(loadVideosFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(selectVideo, (state, { video }) => ({
    ...state,
    selectedVideo: video,
  }))
);
