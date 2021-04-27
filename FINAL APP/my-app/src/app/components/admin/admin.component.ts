import { Component, OnInit } from '@angular/core';
import { GigsService } from 'src/app/services/gigs.service';
import { ProfService } from 'src/app/services/prof.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any;
  id:any = []


  constructor(private myservice:GigsService , private profserv:ProfService){
  }
  gigs:any = []

  profs:any =[]
  ngOnInit(): void {
    this.myservice.getgigs()
    .subscribe((result)=>{
      console.log(result);
      this.gigs = result
  })

  this.profserv.getProf()
  .subscribe(
    (req)=>{
      this.profs= req
    })

    this.profserv.getOne(this.id).subscribe(data=>{
      this.data = data
      console.log(data)
    })
  }

  delete(id:any){
    this.profserv.delete(id).subscribe(res=>{
      this.profs.id = res
      console.log("Deleted",res)
      alert("تم الحذف")
      this.profserv.getProf()
      .subscribe(
      (req)=>{
      this.profs= req
    })
    })
  }





  clickMethod(user: string) {
    if(confirm('هل انت متأكد من حذف ' + user)) {
      console.log('Implement delete functionality here');
    }
  }


}
