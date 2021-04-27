import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SlideshowModule} from 'ng-simple-slideshow';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { JobDeatailsComponent } from './components/job-deatails/job-deatails.component';
import { ClientService } from './services/client.service';
import {ReactiveFormsModule} from '@angular/forms'
import {RegistrationComponent} from './components/registration/registration.component'
import { from } from 'rxjs';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddProfessionComponent } from './components/add-profession/add-profession.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { LoginComponent } from './components/login/login.component';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FileUploadModule} from 'primeng/fileupload';
import { DeleteComponent } from './components/delete/delete.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { AddGigComponent } from './components/add-gig/add-gig.component';
import { MessageComComponent } from './components/message-com/message-com.component';

import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RippleModule} from 'primeng/ripple';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';

const routes:Routes =[
  {path:"",component:HomeComponent},
  {path:"jobs",component:JobsComponent},
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"jobdetails/:id",component:JobDeatailsComponent},
  {path:"Registr",component:RegistrationComponent},
  {path:"profile",component:ProfileComponent},
  {path:"admin",component:AdminComponent},
  {path:"addprofession",component:AddProfessionComponent},
  {path:"ViewUsers",component:ViewUsersComponent},
  {path:"login",component:LoginComponent},
  { path: 'delete/:id', component: DeleteComponent },
  {path:"gig",component:AddGigComponent},
  {path:"edit/:id",component:ProfileEditComponent},
  {path:"messages",component:MessageComComponent},




]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    JobsComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    JobDeatailsComponent,
    RegistrationComponent,
    ProfileComponent,
    AdminComponent,
    AddProfessionComponent,
    ViewUsersComponent,
    LoginComponent,
    DeleteComponent,
    ProfileEditComponent,
    AddGigComponent,
    MessageComComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    SlideshowModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
     ReactiveFormsModule ,
     ButtonModule,
     AccordionModule,
     RadioButtonModule,
     FileUploadModule,
     InputTextModule,
     RippleModule,
     InputTextareaModule,
     InputNumberModule,
     CheckboxModule,


  ],
  providers: [ClientService],
 bootstrap: [AppComponent]
})
export class AppModule { }
