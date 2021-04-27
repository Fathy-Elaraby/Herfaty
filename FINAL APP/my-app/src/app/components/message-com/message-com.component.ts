import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-com',
  templateUrl: './message-com.component.html',
  styles: [
  ]
})
export class MessageComComponent implements OnInit ,OnDestroy{

  ngOnDestroy(): void {
    this.subscriber.unsubscribe()
  }
  message:any;
  subscriber:any

  recivedMessages:any=[]

  constructor(private myService:MessageService) { }

  ngOnInit(): void {
    this.subscriber = this.myService.getMessage()
    .subscribe({
      next:(response)=>{
        //success
        this.message = response.body;
        console.log(this.message)
        this.recivedMessages=this.message
      },
      error:(err)=>{
        //error
        console.log(err)
      }
    })
  }



  delete(id:any){
    this.myService.delete(id).subscribe(
      {
        next:()=>{
          //success
         console.log("done");
         alert("تم الحذف")
         this.myService.getMessage()
    .subscribe({
      next:(response)=>{
        //success
        this.message = response.body;
        console.log(this.message)
        this.recivedMessages=this.message
      },
      error:(err)=>{
        //error
        console.log(err)
      }
    })
        },
        error:(err)=>{
          //error
          console.log(err)
        }
      }
    )

    }
  }
