import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icomment, Icomments } from '../icomment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  searchComments(id: number): Observable<Icomments> {
    return this.http.get<Icomments>(`${API}/photos/${id}/comments`);
  }

  addComment(id: number, commentText: string): Observable<Icomment> {
    return this.http.post<Icomment>(`${API}/photos/${id}/comments`, {
      commentText
    });
  }
}
