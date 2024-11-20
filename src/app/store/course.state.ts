// src/app/store/course.state.ts

export interface Video {
    id: number;
    title: string;
    url: string;
  }
  
  export interface CourseState {
    videos: Video[];
    selectedVideo: Video | null;
    loading: boolean;
    error: string | null;
  }
  
  export const initialCourseState: CourseState = {
    videos: [],
    selectedVideo: null,
    loading: false,
    error: null,
  };
  