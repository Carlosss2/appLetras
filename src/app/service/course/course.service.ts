// src/app/services/course.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../../store/course.state';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = 'https://api.ejemplo.com/videos';  // URL de la API de videos

  constructor(private http: HttpClient) {}

  // Método para obtener los videos del curso
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }
}
