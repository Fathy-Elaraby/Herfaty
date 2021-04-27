import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import {LoginComponent}from './../login/login.component' ;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css',
  '../../../assets/assets/css/main.css',
  '../../../assets/assets/css/bootstrap-select.min.css',
  '../../../assets/assets/css/slicknav.css',
  '../../../assets/assets/css/responsive.css',
  '../../../assets/assets/fonts/line-icons/line-icons.css',
  '../../../assets/assets/fonts/line-icons/line-icons.css',
  '../../../assets/assets/css/font-awesome.min.css',
  '../../../assets/assets/css/jasny-bootstrap.min.css',
  '../../../assets/assets/css/jasny-bootstrap.min.css',
  '../../../assets/assets/css/bootstrap.min.css'
]
})
export class NavBarComponent implements OnInit {

  constructor(private  l:AppComponent) { }
r:any
  ngOnInit(): void {
   this.r =this.l.role
   console.log("ola")
    console.log(this.r)
  }
  o(){
    this.l.role=""
  }

}
