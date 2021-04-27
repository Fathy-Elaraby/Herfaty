import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Client} from '../models/client'
import { Gig } from '../models/Prof'
import { FormBuilder , FormGroup, Validators }from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private myClient:HttpClient ,private fb:FormBuilder) { }
  readonly baseURL:string = "http://localhost:24491/api/Auth/registerUser";
  readonly baseURLFree:string = "http://localhost:24491/api/Auth/register";
  readonly baseURLprof:string = "http://localhost:24491/api/profession";

  postClient(client:Client){
    const body = client;
    return this.myClient.post(`${this.baseURL}`, body );
   }
   postFreelancer(freelancer:any){
    const body = freelancer;

    return this.myClient.post(`${this.baseURLFree}`, body );

   }



   postProf(prof:Gig){
    const body = prof;
    return this.myClient.post(`${this.baseURLprof}`, body );

   }
   formModel =
this.fb.group({
  userName:['' ,Validators.required],
  lastName:['',Validators.required],
  Email:['',[Validators.required , Validators.email]],
  PhoneNum:['',[Validators.required,Validators.minLength(11) ,Validators.maxLength(11),Validators.pattern(/^011|015|012|010[0-9]+$/)] ],
  password:['' ,[Validators.required ,Validators.minLength(5)]],
  confirmPass:['',Validators.required],
  streetNum:['', Validators.required],
  streetName:['', Validators.required],
  city:['', Validators.required],
  country:['', Validators.required],
  profssion:['' ,Validators.required]

},{validator:this.comparePass})
comparePass(group:FormGroup){
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPass')?.value;

  return password === confirmPassword ? null : { notSame: true }
}


}
