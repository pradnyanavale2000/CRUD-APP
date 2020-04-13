import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  forgetpasswordform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authServive: AuthService
  ) { }

  ngOnInit() {
    this.forgetpasswordform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  forgetpassword() {
    const data = {
      email: this.forgetpasswordform.get('email').value,
      password: this.forgetpasswordform.get('password').value
    };

    this.authServive.forgetPassword(data).subscribe((response: any) => {

      console.log(response);
      alert(response.msg);

    }, (error) => {

      console.log(error);
      alert(error.error.msg);

    });
  }

}
