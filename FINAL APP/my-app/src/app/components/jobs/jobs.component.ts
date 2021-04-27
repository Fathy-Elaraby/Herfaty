import { Component, OnInit } from '@angular/core';
import { GigsService } from 'src/app/services/gigs.service';
import { Gig } from 'src/app/models/Gig';
import { ProfService } from 'src/app/services/prof.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  gigs:any =[]
  professions:any=[]
  profgigs:any=[]
  locgigs:any=[]
  locandprofgigs:any=[]
  cities:string[]=["اسكندريه","سوهاج","القاهرة","الجيزة", "القليوبية"]
  giglength:any=0
  proflength:any=0
  loclength:any=0
  length:any=0
  profval:any
  locval:any

  constructor(private myservice:GigsService,private myprofservice:ProfService) { }

  ngOnInit(): void {

 this.myservice.getgigs()
.subscribe({
  next:(result)=>{
  this.gigs = result
  console.log(this.gigs);
  this.giglength=Object.keys(this.gigs).length
   console.log(this.giglength)

  },
  error:(err)=>{
    console.log(err)
  }

})
this.getpro()
  }
  getpro(){
    this.myprofservice.getProf()
    .subscribe({
      next:(result)=>{
        this.professions=result
        console.log(this.professions)

      }
    })

  }
  getgigbyprof(value:any){
    console.log("ola")
    console.log(value.value)
    this.profval=value.value
    this.myservice.getgigbyprof(value.value)
    .subscribe({
      next:(result:any)=>{

        this.profgigs=result
        console.log(this.profgigs)
        this.proflength=Object.keys(this.profgigs).length
        console.log(this.proflength)
      }
    })
  }
 /* val(value:any){
    console.log(value.value)
    this.locval=value.value
  }*/

  getgigbyloc(value:any){
    console.log(value.value)
    this.locval=value.value
    this.proflength=0
    this.myservice.getgigbylocation(value.value)
    .subscribe({
      next:(result:any)=>{
        this.locgigs=result
        console.log(this.locgigs)
        this.loclength=Object.keys(this.locgigs).length
        console.log(this.loclength)


      }
    })
  }

  getgigbylocandprof(){
    if(this.profval!=null && this.locval!=null)
    {
      console.log(this.locval)
      this.myservice.getgigbylocandprof(this.locval,this.profval)
      .subscribe({
        next:(result:any)=>{
          this.locandprofgigs=result
          console.log(this.locandprofgigs)
          this.loclength=Object.keys(this.locandprofgigs).length

      }
    })
  }else{
    this.getgigbyloc(this.locval)
  }

  }
  // o(){
  // if(this.profval==0)
  // {
  //   this.getgigbyloc(this.loc)
  // }
  // }

}
