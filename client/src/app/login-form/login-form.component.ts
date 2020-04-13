import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';
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
    private route:Router,
    private authServive: AuthService
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

    this.authServive.login(data).subscribe((response: any) => {
      localStorage.setItem('token', response.token);
      console.log(response);
      this.route.navigate(['/homepage']);
    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }
}
