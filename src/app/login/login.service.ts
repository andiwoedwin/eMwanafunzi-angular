
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'COntent-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  api_url: string = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { }
  login(username: string, password: string){
    return this.http.post<any>(this.api_url + 'login/',
    { username, password }, httpOptions).pipe(
      map(user => {
        if (user && user.token){
          localStorage.setItem("currentUser", JSON.stringify(user));
          }
          return user;
      })
    );
  }
  logout(){
    localStorage.removeItem('currentUser');
  }
}