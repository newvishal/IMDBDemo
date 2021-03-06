import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false; 
  constructor(public fb: FormBuilder, private router: Router,) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.createregisterForm();
  }
  
  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  createregisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get getLoginForm() {
    return this.loginForm.controls 
  }

  get getregisterForm() {
    return this.registerForm.controls 
  }

  onLoginSubmit() {
    this.submitted = true
    if(this.loginForm.invalid) return
    this.router.navigate(['dashboard']);
    console.log(this.loginForm.value);
  }

  onRegisterSubmit() {
    this.submitted = true
    if(this.registerForm.invalid) return
    this.router.navigate(['dashboard']);
    console.log(this.registerForm.value);
  }
}
