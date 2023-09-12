import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ianimals } from './ianimal';
import { TokenService } from '../authentication/token.service';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AnimalsService {
  constructor(private http: HttpClient , private tokenService:TokenService) {}

  userList(userName: string): Observable<Ianimals> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token' , token);
    return this.http.get<Ianimals>(`${API}/${userName}/photos`, {
      headers
    });
  }

  listAllAnimals(): Observable<Ianimals> {
    const token = this.tokenService.returnToken();
    const headers = new HttpHeaders().append('x-access-token' , token);
    return this.http.get<Ianimals>(`${API}/photos`, {
      headers
    });
  }



}
