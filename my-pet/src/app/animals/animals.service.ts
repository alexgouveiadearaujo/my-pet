import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError, mapTo, map } from 'rxjs';
import { Ianimal, Ianimals } from './ianimal';
import { TokenService } from '../authentication/token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userList(userName: string): Observable<Ianimals> {
    return this.http.get<Ianimals>(`${API}/${userName}/photos`);
  }

  listAllAnimals(): Observable<Ianimals> {
    return this.http.get<Ianimals>(`${API}/photos`);
  }

  searchById(id: number): Observable<Ianimal> {
    return this.http.get<Ianimal>(`${API}/photos/${id}`);
  }

  deleteAnimal(id: number): Observable<Ianimal> {
    return this.http.delete<Ianimal>(`${API}/photos/${id}`);
  }

  like(id: number): Observable<boolean> {
    return this.http.post(
      `${API}/photos/${id}/like`,
      {},
      { observe: 'response' }
    ).pipe(
      // mapTo(true),
      map(()=>true),
      catchError((error)=>{
        return error.status === NOT_MODIFIED ? of(false): throwError(error)
      })
    )
  }



}
