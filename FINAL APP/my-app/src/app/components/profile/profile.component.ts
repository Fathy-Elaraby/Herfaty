import { Component, OnInit } from '@angular/core';

// import { Profiler } from 'node:inspector';
import { GigsService } from 'src/app/services/gigs.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  gig:any = []
  allgig:any=[]
  alluser:any=[]
  user_id:any

  constructor(private myservice:GigsService ,private myuserservic:ProfileService) { }

  ngOnInit(): void {
    this.user_id=sessionStorage.getItem("id")
    this.myuserservic.getUserById(this.user_id)
.subscribe({
  next:(result:any)=>{

    this.gig=result
    this.allgig=this.gig[0].gigs
    this.alluser=this.gig[0]
    console.log(this.gig)
    console.log(this.allgig)
    console.log(this.alluser.name)

}
  })

}
}
