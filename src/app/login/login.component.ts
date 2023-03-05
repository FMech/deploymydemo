import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{HttpClient} from '@angular/common/http' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform!: FormGroup;
  constructor(private formBuilder:FormBuilder) {}
  ngOnInit(): void {
      this.loginform=this.formBuilder.group({
        email:['',Validators.required],
        password:['',Validators.required]
      })
  }

}