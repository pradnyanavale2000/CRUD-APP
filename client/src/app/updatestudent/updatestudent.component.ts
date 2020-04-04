import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {
  updateform: FormGroup;
  student ={
    firstname:'',
    lastname:'',
    mobileno:'',
    email:'',
    username:''

  }
  public stuId='';
  split: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
     ) {}

  ngOnInit() {
    let id= this.route.snapshot.paramMap.get('id');
    console.log(id);
    console.log(this.router.url);
    this.stuId=id;
    const data={
      id:this.stuId
    }
    const stu ={
      firstname:'',
      lastname:'',
      mobileno:'',
      email:'',
      username:''

    };
    this.updateform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required]
    });

    patchForm(stu) {
      this.updateform.get('firstname').setValue(stu.firstname);
      this.updateform.get('lastname').setValue(stu.lastname);
      this.updateform.get('mobileno').setValue(stu.mobileno);
      this.updateform.get('email').setValue(stu.email);
      this.updateform.get('username').setValue(stu.username);

    }
    this.http.post('http://localhost:3000/student/showone', data).subscribe((res: any) => {
      this.student.firstname=res.student.firstname;
      this.student.lastname=res.student.lastname;
      this.student.mobileno=res.student.mobileno;
      this.student.email=res.student.email;
      this.student.username=res.student.username;

      console.log(this.student.firstname)
      console.log(this.student.lastname)

      console.log(res.student.firstname)
      console.log(res.student);
      console.log(this.student);
      this.patchForm(this.student);


    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });


  }
  update(){
    const data = {
      _id:this.stuId,
      firstname: this.updateform.get('firstname').value,
      lastname: this.updateform.get('lastname').value,
      mobileno: this.updateform.get('mobileno').value,
      email: this.updateform.get('email').value,
      username: this.updateform.get('username').value
    };

    console.log(data._id)
    this.http.put('http://localhost:3000/student/update', data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });

  }

}
