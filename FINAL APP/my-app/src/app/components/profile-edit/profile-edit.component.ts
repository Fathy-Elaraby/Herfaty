import { Component, OnInit , NgModule} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { ClientService } from 'src/app/services/client.service';

import { PrimeNGConfig } from 'primeng/api';
import { FormBuilder,  FormGroup , Validators } from '@angular/forms';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'
 ]
})

export class ProfileEditComponent implements OnInit {
  EditForm:FormGroup=this.fb.group({
  Email:['',[Validators.email]],
  phones:['',[ Validators.pattern(/^011|015|012|010[0-9]+$/),Validators.minLength(11),Validators.maxLength(11)]]

});

//_user:any;
myEdit:any;
firstName:string="";
workDistrict: any="";
city:any="";
lName:any="";
name:any="";
email:any="";
phone:any="";
professions:any |undefined;
myProfession:any |undefined;
streetName:any="";
_user:any;
validEmail:any;
validPhone:any;
user_id:any
id:any
all:any
   constructor(public service:ClientService,
    private myActivatedRoute:ActivatedRoute ,
    private fb:FormBuilder,private primengConfig: PrimeNGConfig ,
    private serviceProfile:ProfileService) {
      }

  ngOnInit(): void {

    this.user_id=sessionStorage.getItem("id")
    this.id = this. myActivatedRoute.snapshot.params['id']


    this.primengConfig.ripple = true;
    console.log(this.user_id)
    console.log(this.id)

    // parameter in get user by id => this.myActivatedRoute.snapshot.params.id
    this.serviceProfile.getUserById(this.user_id)
    .subscribe({
      next:(x)=>{
        const i=Object.entries(x);
        this.all=x
        this._user=this.all[0];
        console.log(x)
        console.log(this._user)

         /* this.myEdit={
          email:  this._user.email,
          firstName:this._user.firstName,
          lastName:this._user.lastName,
          phone:this._user.phoneNumber,
          workCity:this._user.workCity,
          workCountry:this._user.workCountry,
          userName:this._user.userName,
          workDistrict:this._user.workDistrict
        };
*/
      },
      error:(err)=>{
        console.log(err)
      }
    } )
  }

  editPofile(){





  //console.log(this.EditForm.get('Email')?.errors);
  /* if(this.EditForm.valid ){
    console.log(this._user)

    this.service.putFreelancer("334a9574-e7f0-4ab0-b370-165af723c7cf", this.myEdit).subscribe({
      next: () => {
    alert("done")

      },
      error: (err) => {
        alert(err)
      }
    })
  }
  else
  {
    alert("not valid data")
  }*/
  }



  updateUser(){

  if (this.name=="")
    this.name=this._user.firstName
  if (this.lName == "")
    this.lName=this._user.lastName
  if(this.workDistrict=="")
    this.workDistrict=this._user.workDistrict
  if(this.city=="")
    this.city=this._user.workCity
  if(this.email=="" || this.service.formModel.controls.Email.status != "VALID")
    this.validEmail=this._user.email
  else
    this.validEmail=this.email
  if(this.phone=="" || this.service.formModel.controls.PhoneNum.status != "VALID")
    this.validPhone=this._user.phoneNumber
  else
    this.validPhone=this.phone

  const userEdit ={
    firstName:this.name,
    lastName:this.lName,
    workDistrict:this.workDistrict,
    workCity:this.city,
    email:this.validEmail,
    phone:this.validPhone,
    userName:this.lName+this.lName,
    WorkCountry:"مصر"
  }

  this.serviceProfile.putFreelancer(this.user_id,userEdit).subscribe({
    next:(x)=>{
      alert("تم التعديل بنجاح")
    },
    error:(err)=>{
      alert("فشل في العمليه")
    }
  }
  )

  console.log(this._user);
    console.log(userEdit);

  }
  }


