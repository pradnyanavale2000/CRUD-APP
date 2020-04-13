import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authApi = 'http://localhost:3000/user';

  constructor(
    private http: HttpClient
  ) { }

  forgetPassword(data) {
    return this.http.post(this.authApi + '/forgetpassword', data);
  }
  login(data) {
    return this.http.post(this.authApi + '/login', data);
  }
  register(data) {
    return this.http.post(this.authApi + '/signup', data);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
