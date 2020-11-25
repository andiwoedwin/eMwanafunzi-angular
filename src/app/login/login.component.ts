import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  constructor(private authService: LoginService,private router: Router) { }
  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  get f(){
    return this.myform.controls;
  }
  onSubmit(){
    this.authService.login(this.f.username.value, this.f.password.value).pipe(first()).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          text: ' successfully logged in!'
        })
        this.router.navigate([""])
      },
      error => {
        Swal.fire({
          icon: 'error',
          text:  ' check your credentials!',
        })
      }
    )
  }
}