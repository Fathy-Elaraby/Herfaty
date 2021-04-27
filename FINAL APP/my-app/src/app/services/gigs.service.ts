import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map , catchError, retry } from 'rxjs/operators';
import { Gig } from '../models/Gig';
import { from, Observable, throwError } from 'rxjs';
import { FormBuilder , FormGroup, Validators }from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GigsService {




 constructor(private myclient:HttpClient , private fb:FormBuilder) { }
 formModel =
 this.fb.group({
   fileToUpload:['' ,Validators.required],
   minPrice:['',[ Validators.pattern(/[0-9]/)] ],
   maxPrice:['',[Validators.required , Validators.pattern(/[0-9]/)]],
   description:['',Validators.required ],
   gigName:['' ,Validators.required ],

 });

 readonly baseurl:string="http://localhost:24491/api/Gig"
  getgigs():Observable<any>{
 return this.myclient.get(this.baseurl)
  }
  getgigsById(id=0){
    return this.myclient.get(`${this.baseurl}/${id}`)
  }

  getOne(id:any)
  {
    return this.myclient.get("http://localhost:24491/api/Gig/"+id)

  }
  getgigbypro(id:any){
    return this.myclient.get("http://localhost:24491/api/Gig/searchByProfession/"+id)
  }
  getgigbyprof(id=0){
    return this.myclient.get(`${this.baseurl}/searchByProfession/${id}`)
  }
  getgigbylocation(name:string){
    return this.myclient.get(`${this.baseurl}/searchByLocation/${name}`)
  }


  getgigbylocandprof(name:string , id = 0){
    return this.myclient.get(`${this.baseurl}/searchByLocprofession/${id}/${name}`)
  }

  postGig(gig:any){
    return this.myclient.post(`${this.baseurl}`,gig );

  }





}
