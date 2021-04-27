import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import {AppComponent} from './../../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  form {border: 2px solid #ccc;}

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #E32;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 20%;
    border-radius: 20px;
  }

  button:hover {
    opacity: 0.7;
  }

  .container {
    padding: 15px;
  }

  span.psw {
    float: right;
    padding-top: 0px;
  }
  label{
    direction:rtl
  }
  `
  ]
})


export class LoginComponent implements OnInit {

  loginFrm:FormGroup=this.fb.group({
    Email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  });

  constructor(private service:LoginService ,private fb:FormBuilder,private router:Router,private  l:AppComponent) {

   }

  ngOnInit(): void {
    /**
     * this.loginFrm = this.fb.group({
      Email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
     */
console.log(this.l.role)
  }
  Red:any;


  loginProcess(){
    //console.log('grap'+this.loginFrm)

    if(this.loginFrm.valid){

      this.service.login(this.loginFrm).subscribe({
        next:(res)=>{
          this.Red=res
          console.log(this.Red)
          if(this.Red.isAuthenticated)
          {
              sessionStorage.setItem("id",this.Red.id)
            this.l.role=this.Red.roles[0]
console.log(this.l.role)

              if(this.l.role=='Admin'){
                  this.router.navigate(["/admin"])
              }
              else
              {
                this.router.navigate([""])

                console.log(sessionStorage.getItem("id"));

              }

          }
        },
        error:(err)=>{
          //error
          console.log(err.error);
          this.Red=err.error

        }
      })
    }
    else
      console.log('bad'+this.loginFrm.valid)
  }
  }
