import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  registrationformstudent: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private studentServive: StudentService

  ) { }

  ngOnInit() {
    this.registrationformstudent = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required]
    });

  }
  register() {
    const data = {
      firstname: this.registrationformstudent.get('firstname').value,
      lastname: this.registrationformstudent.get('lastname').value,
      mobileno: this.registrationformstudent.get('mobileno').value,
      email: this.registrationformstudent.get('email').value,
      username: this.registrationformstudent.get('username').value
    };
    console.log('data', data);

    this.studentServive.signup(data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

}
