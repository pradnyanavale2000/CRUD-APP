import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  students=[];
  constructor(
    private http: HttpClient,
    private route:Router,
    private studentServive: StudentService
  ) { }

  ngOnInit() {
    this.studentServive.show().subscribe((res: any) => {
      this.students=res.student;
      console.log(res);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
  delete(id){
    console.log(id)
    this.studentServive.Delete(id).subscribe((res: any) => {
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
