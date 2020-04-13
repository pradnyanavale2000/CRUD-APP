import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentApi = 'http://localhost:3000/student';
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  Delete(id) {
    return this.http.delete(this.studentApi + `/studentDelete/${id}`);
  }
  show(){
    return this.http.get(this.studentApi + `/show`);
  }
  signup(data){
    return this.http.post(this.studentApi + `/signup`, data);
  }
  showone(data){
    return this.http.post(this.studentApi + `/showone`, data);
  }
  update(data){
    return this.http.put(this.studentApi + `/update`, data);
  }
  logout(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
