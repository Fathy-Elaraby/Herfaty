import { Component, OnInit } from '@angular/core';
import {GigsService} from './../../services/gigs.service';
@Component({
  selector: 'app-add-gig',
  templateUrl: './add-gig.component.html',
  styleUrls: ['./add-gig.component.css']
})
export class AddGigComponent implements OnInit {

  formData:any |undefined;
  fileToUpload:any="";
  minPrice :any;
  maxPrice:any;
  description:string="";
  gigName:string="";
  ProfessionId:any;
  userID:string="0";


  constructor(public gigService:GigsService) { }

  ngOnInit(): void {
  }

  uploadfile=(files :any)=>{
    if (files.length==0){
        return
    }
    else{
    this.fileToUpload=<File>files[0];
    
      this.formData=new FormData();
      this.formData.append('files',this.fileToUpload,this.fileToUpload.name);
    }
  } 
  
  addGig() {

    if (
      this.gigService.formModel.controls.description.status == "VALID"
      && this.gigService.formModel.controls.maxPrice.status == "VALID"
      &&this.gigService.formModel.controls.gigName.status == "VALID"
      
    )
      {
        
        this.formData.append('gigName',this.gigName)
        this.formData.append('maxPrice',this.maxPrice)
        this.formData.append('minPrice',this.minPrice)
        this.formData.append('description',this.description)
         this.formData.append('professionId',2)
        this.formData.append('userId',"d4eefc3a-a72f-4f6d-82ca-a17f972b0688")
        

      this.gigService.postGig(this.formData).subscribe({
        next: () => {
          console.log("done")
          alert("تمت الاضافه بنجاح")
        //  this.router.navigateByUrl('');
        },
        error: () => {
          console.log("فشل في الاضافه")
        }
      })
    }
     else
      alert("بيانات غير صحيحه"); 

      console.log(this.formData);
  
  }

}
