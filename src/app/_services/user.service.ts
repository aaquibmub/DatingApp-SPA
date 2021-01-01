import { ValueComponent } from './../value/value.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl + 'users/';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + id);
  }

  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(this.baseUrl + id, user);
  }

  setMainPhoto(userId: number, id: number): Observable<any> {
    return this.http.post(this.baseUrl + userId + '/photos/' + id + '/setmain', {});
  }

  deletePhoto(userId: number, id: number): Observable<any> {
    return this.http.delete(this.baseUrl + userId + '/photos/' + id);
  }

}
