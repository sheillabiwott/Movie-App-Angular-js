import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tmdbConfig } from '../constants/config';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpService: HttpClient) {}

  getPopularMovies(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/popular', { headers })
      .pipe(catchError(error => throwError(error)));
  }

  getNowPlayingMovies(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/now_playing', { headers })
      .pipe(catchError(error => throwError(error)));
  }

  getTopRatedMovies(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/top_rated', { headers })
      .pipe(catchError(error => throwError(error)));
  }

  getUpcomingMovies(): Observable<any> {
    const headers = this.getHeaders();
    return this.httpService.get('https://api.themoviedb.org/3/movie/upcoming', { headers })
      .pipe(catchError(error => throwError(error)));
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('accept', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + tmdbConfig.accessToken);
    return headers;
  }

  getMovieVideos(movieId: number): Observable<any> {
    const headers = this.getHeaders();
    return this.httpService.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, { headers })
      .pipe(catchError(error => throwError(error)));
  }
}
