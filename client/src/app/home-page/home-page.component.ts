import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  students=[];
  constructor(
    private http: HttpClient,
    private route:Router
  ) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/student/show').subscribe((res: any) => {
      this.students=res.student;
      console.log(res);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
  delete(id){
    console.log(id)
    this.http.delete(`http://localhost:3000/student/delete/${id}`).subscribe((res: any) => {
      alert(res.msg);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

  update(id){
    this.route.navigate(['/update',id]);
    console.log(id);
  }

}
