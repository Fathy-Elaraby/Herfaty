import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private myClient:HttpClient) { }
  readonly baseURLp:string = "http://localhost:24491/api/Message";
  sendMessage(Data:any){
    //console.log(Data);
    var x={
      userName:Data.value.UserName,
      email:Data.value.Email,
      subject:Data.value.Subject,
      message:Data.value.Message
    }
    //console.log(x)
        return this.myClient.post(this.baseURLp,x)
      }
    // readonly baseURLg:string = "http://localhost:24491/api/Message";

    getMessage(){
      return this.myClient.get(this.baseURLp,{
        observe:'response'
      })
    }

    delete(id:any){
      return this.myClient.delete(this.baseURLp+"/"+id)
      console.log(id)
    }
}
