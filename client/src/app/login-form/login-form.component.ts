import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route:Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const data = {
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this.http.post('http://localhost:3000/user/login', data).subscribe((response: any) => {
      alert(response.msg);
      this.route.navigate(['/homepage']);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
