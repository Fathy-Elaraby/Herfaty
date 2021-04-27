import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map , catchError, retry } from 'rxjs/operators';
import { Client } from '../models/client';
import { FormBuilder , FormGroup, Validators }from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private myClient:HttpClient ) { }
  readonly baseURL:string = "http://localhost:24491/api/Users";
  readonly baseURLput:string = "http://localhost:24491/api/Users/Putfreelancer";

  putFreelancer(id:string ,body1:any){

    const body =body1;
    return this.myClient.put(`${this.baseURLput}/${id}`, body );

  }

  getUserById(id:string){
    //const _id="334a9574-e7f0-4ab0-b370-165af723c7cf";
    return this.myClient.get(`${this.baseURL}/${id}`)
  }
  putUserById(){

  }

}
