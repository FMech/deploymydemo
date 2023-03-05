import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {
  signupform!:FormGroup;
  constructor(private formBuilder:FormBuilder){ }
  ngOnInit(): void {
    this.signupform=this.formBuilder.group({
      name:['', Validators.required],
      email: ['', Validators.required],
      mobile:['', Validators.required],
      password:['' ,Validators.required],
    })
    
    } 

  }