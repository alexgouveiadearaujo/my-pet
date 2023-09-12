import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InewUser } from '../inew-user';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: InewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  checkExistingUser(userName: string) {
    return this.http.get(`${API}/user/exists/${userName}`);
  }
}
