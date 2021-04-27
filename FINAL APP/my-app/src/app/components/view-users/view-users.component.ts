import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  Users: any=[]
  constructor(private myservice:UsersService) { }

  ngOnInit(): void {
this.myservice.getUsers()
.subscribe((result)=>{
  console.log(result);
  this.Users = result
  })



}
delete(id:any){
  this.myservice.delete(id).subscribe(res=>{
    this.Users.id = res
    console.log("Deleted",res)
    alert("تم الحذف")
    this.myservice.getUsers()
    .subscribe((result)=>{
      console.log(result);
      this.Users = result
      })
  })
}
}
