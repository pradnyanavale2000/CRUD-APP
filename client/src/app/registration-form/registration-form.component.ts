import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  registrationform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authServive: AuthService
  ) { }

  ngOnInit() {
    this.registrationform = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mobileno: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  register() {
    const data = {
      firstname: this.registrationform.get('firstname').value,
      lastname: this.registrationform.get('lastname').value,
      mobileno: this.registrationform.get('mobileno').value,
      email: this.registrationform.get('email').value,
      username: this.registrationform.get('username').value,
      password: this.registrationform.get('password').value
    };
    console.log('data', data);

    this.authServive.register(data).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
