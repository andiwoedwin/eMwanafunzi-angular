import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  register;
  constructor(private registerService: RegisterService,private router: Router ){
  }
  ngOnInit(){
    this.register = {
      username: '',
      password: '',
    };
  }
  registerUser(){
    this.registerService.registerUser(this.register).subscribe(
      response => {
        // Swal.fire({
        //   icon: 'success',
        //   title: this.register.username ,
        //   text: ' successfully registered!',
        // })
        alert("Succesfully registered!!");
        this.router.navigate(["login"])
      },
      error => {
        // Swal.fire({
        //   icon: 'error',
        //   title: this.register.username,
        //   text:  'already registered user!',

        // })
        alert("the user is already registered")
      }
    )
  }
}