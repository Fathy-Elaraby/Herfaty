import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-profession',
  templateUrl: './add-profession.component.html',
  styleUrls: ['./add-profession.component.css']
})
export class AddProfessionComponent implements OnInit {

  profName:string = ""
  profPic:string =""
  onUploadFinished: any;
  progress!: number;
  message!: string;
  formData:any
  selectedFile:any
  fileToUpload:any
  uploadfile:any

  constructor(private router: Router, private myService: ClientService ,private http:HttpClient) { }
  readonly service: any = this.myService;

  
  ngOnInit(): void {
  
  }

  public uploadFile = (files:any) => {
    if (files.length === 0) {
      return;
    }
      this.fileToUpload = <File>files[0];

  }
  

  postData()
  {
    this.formData = new FormData();
   
       this.formData.append("profName",this.profName)
       this.formData.append('files', this.fileToUpload, this.fileToUpload.name);

  
    this.http.post('http://localhost:24491/api/profession', this.formData, {reportProgress: true, observe: 'events'})
   this.myService.postProf(this.formData).subscribe({
      next:()=>{
        console.log("done")
        
        console.log(this.formData)
        this.router.navigateByUrl('')
      }
    })
   /* .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
       console.log("Done!")
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);
      }
    });*/

    
  }

}



