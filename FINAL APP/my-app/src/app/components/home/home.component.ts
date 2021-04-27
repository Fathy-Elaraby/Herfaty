import { Component, OnDestroy, OnInit } from '@angular/core';
import { Gig } from 'src/app/models/Gig';
import { GigsService } from 'src/app/services/gigs.service';
import { ProfService } from 'src/app/services/prof.service';
import {LoginComponent}from './../login/login.component' ;
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
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
export class HomeComponent implements OnInit {

  constructor(private myservice:GigsService , private profserv:ProfService,private  l:AppComponent) { }
  gigs:any = []
  profs:any =[]
  subscriber:any
  r:any
  ngOnInit(): void {
    this.r =this.l.role
    console.log("ola")
     console.log(this.r)
     console.log(sessionStorage.getItem("id"));

this.myservice.getgigs()
.subscribe((result)=>{
  console.log(result);
  this.gigs = result
  console.log(LoginComponent)
})

this.profserv.getProf()
.subscribe(
  (req)=>{
    console.log(req)
    this.profs= req
  }
)
  }
}
