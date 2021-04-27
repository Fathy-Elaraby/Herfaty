import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfService {

  constructor(private myclient:HttpClient) { }
 readonly baseurl:string="http://localhost:24491/api/profession"
  getProf():Observable<any>{
 return this.myclient.get(this.baseurl)
  }
  getOne(id:any)
  {
    return this.myclient.get("http://localhost:24491/api/profession/"+id)

  }
  delete(id:any){
    return this.myclient.delete("http://localhost:24491/api/profession/"+id)
  }
}
