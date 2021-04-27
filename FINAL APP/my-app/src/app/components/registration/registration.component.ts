import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { PrimeNGConfig } from 'primeng/api';
import {ProfService} from '../../services/prof.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {RadioButtonModule} from 'primeng/radiobutton';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css',
    './../profile-edit/profile-edit.component.css'

  ],


})
export class RegistrationComponent implements OnInit {
@Output() onUploadFinished =new EventEmitter();
  message:string | undefined;
  progress:number=NaN;
  response: { dbpath: ''; } | undefined
  newClient: any|undefined;

  constructor(private router: Router, public myService: ClientService, private fb: FormBuilder,
    private primengConfig: PrimeNGConfig ,private bt:RadioButtonModule
    ,private myprofservice:ProfService ,private http:HttpClient,private  l:AppComponent) {
    this.primengConfig.ripple = true;
  }
  readonly service: any = this.myService;

  ngOnInit(): void {
    console.log(this.getpro())
    this.formData=new FormData();

   }
   formData:any |undefined
   fileToUpload:any|undefined
  myClient:any | undefined;
  phone: number | undefined;
  name: string = "";
  email: string = "";
  password: string = "";
  confirmPass: string = "";
  confrmBool: boolean = true;
  emaillostt: string = "no";
  allTrue: boolean = true;
  clientType: any;
  freelancerType: string = "";
  checkPhoneNum: boolean = true;
  userName: string = "";
  fullName: string = "";
  lName: string = "";
  city: string = "";
  country: string = "";
  streetName: string = "";
  checkedUserType: string = "client";
  profissonId: number = NaN;
  selectedValue: string = "";
  professions: any=[];
  myProfession:any;

  Red:any

  arrayOfErrors: any[] = [];
  confirmPassword() {
    if (this.password === this.confirmPass)
      this.confrmBool = true;
    else
      this.confrmBool = false;
  }

  getpro(){
    this.myprofservice.getProf()
    .subscribe({
      next:(result)=>{
        console.log(result)
        this.professions=result
      }
    })

  }

  confirmRegister() {
    if (this.service.formModel.controls.userName.status == "VALID"
      && this.service.formModel.controls.lastName.status == "VALID"
      && this.service.formModel.controls.PhoneNum.status == "VALID"
      && this.service.formModel.controls.password.status == "VALID"
      && this.service.formModel.controls.confirmPass.status == "VALID"
      &&this.service.formModel.controls.Email.status=="VALID"

     )
      {
      this.userName=this.name+this.lName;

        this.formData.append('email',this.email);
        this.formData.append('firstName',this.name);
        this.formData.append('password',this.password);
        this.formData.append('lastName',this.lName);
        this.formData.append('userName',this.userName);
        this.formData.append('phone',this.phone);

      this.service.postClient(this.formData).subscribe({
        next: (result:any) => {

          console.log(this.formData);
          console.log("done")
          alert("تم التسجيل بنجاح")
        //  this.router.navigateByUrl('');
         this.Red=result
         console.log(this.Red)
        if(this.Red.isAuthenticated)
          {
              sessionStorage.setItem("id",this.Red.id)
            this.l.role=this.Red.roles[0]
              console.log(this.l.role)

              if(this.l.role=='Admin'){
                  this.router.navigate(["/admin"])
              }
              else
              {
                this.router.navigate([""])

                console.log(sessionStorage.getItem("id"));

              }

          }
        },
        error: () => {
          console.log("فشل في التسجيل")
        }
      })
    }
     else
      alert("بيانات غير صحيحه");

  }

  confirmRegisterFreelancer() {

    if (
      this.service.formModel.controls.userName.status == "VALID"
      && this.service.formModel.controls.lastName.status == "VALID"
      && this.service.formModel.controls.PhoneNum.status == "VALID"
      && this.service.formModel.controls.password.status == "VALID"
      && this.service.formModel.controls.confirmPass.status == "VALID"
      && this.service.formModel.controls.streetName.status == "VALID"
      && this.service.formModel.controls.city.status == "VALID"
      &&this.service.formModel.controls.Email.status=="VALID"

    )
    {

      this.userName=this.name+this.lName;

      this.formData.append('email',this.email);
      this.formData.append('firstName',this.name);
      this.formData.append('password',this.password);
      this.formData.append('lastName',this.lName);
      this.formData.append('userName',this.userName);
      this.formData.append('phone',this.phone);
      this.formData.append('workCountry',"مصر");
      this.formData.append('workCity',this.city);
      this.formData.append('professionId',this.myProfession);
      this.formData.append('workDistrict',this.streetName);

      this.service.postFreelancer(this.formData).subscribe({
        next:(result:any) => {
          alert("تم التسجيل")
          console.log("doneeeeeee")
         // console.log(this.formData)
          // this.router.navigateByUrl('students');
          this.Red=result
          if(this.Red.isAuthenticated)
            {
                sessionStorage.setItem("id",this.Red.id)
              this.l.role=this.Red.roles[0]
                console.log(this.l.role)

                if(this.l.role=='Admin'){
                    this.router.navigate(["/admin"])
                }
                else
                {
                  this.router.navigate([""])

                  console.log(sessionStorage.getItem("id"));

                }

            }
          },
        error: (err:any) =>
        {
          console.log(err)
          console.log("failllllllllld")
          console.log(this.formData)

          alert("لم يتم التسجيل")
        }
      })
     }
    else
      alert("بيانات غير صحيحه");
      console.log(this.formData)



console.log(this.newClient);

 /*this.http.post('http://localhost:24491/api/Auth/register',this.formData,{reportProgress:true,observe:'events'}).subscribe(
  event =>{
    if(event.type === HttpEventType.UploadProgress){
       this.progress =   Math.round (100 * event.loaded) ;
     }
    else if(event.type == HttpEventType.Response){
      this.message="done uploaded";
      this.onUploadFinished.emit(event.body);
    }
  }
)*/
  }

  onItemChange(e: string) {
    this.checkedUserType = e;
  }

  onProfissionChecked(profissonId: number) {
    console.log(profissonId);
    this.profissonId = profissonId;
  }


uploadfile=(files :any)=>{
  if (files.length==0){
      return
  }
  else{
  this.fileToUpload=<File>files[0];

    this.formData.append('files',this.fileToUpload,this.fileToUpload.name);


  /*  if(this.checkedUserType=='freelancer')

   {

    } */



  }
}

uploadedFinished= (event:any) =>
this.response =event;
}
