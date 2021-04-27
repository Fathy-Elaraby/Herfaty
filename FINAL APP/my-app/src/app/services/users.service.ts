import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myclient:HttpClient) { }
  readonly baseurl:string="http://localhost:24491/api/Users"

  getUsers():Observable<any>{
 return this.myclient.get(this.baseurl)
  }
  delete(id:any){
    return this.myclient.delete("http://localhost:24491/api/Users/"+id)
  }
}
