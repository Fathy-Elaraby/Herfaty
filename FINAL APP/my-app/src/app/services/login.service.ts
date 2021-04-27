import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly baseURL:string = "http://localhost:24491/api/Auth/token";
  constructor(private myClient:HttpClient) { }

  login(Data:any){
    //console.log("ana hena");
    //console.log(Data);
    var x={
      email:Data.value.Email ,
      password:Data.value.password
    }
    //console.log(x)
        return this.myClient.post(this.baseURL,x)
      }

}
