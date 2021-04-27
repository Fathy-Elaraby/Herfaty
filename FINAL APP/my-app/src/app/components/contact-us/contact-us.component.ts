import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private fb:FormBuilder,private serveices:MessageService,private router:Router) { }

  messagedetails:FormGroup=this.fb.group({
    UserName:['',[Validators.required]],
    Email:['',[Validators.required]],
    Subject:['',[Validators.required]],
    Message:['',[Validators.required]]
  });
  ngOnInit(): void {
  }
  SMessage(){
    this.serveices.sendMessage(this.messagedetails).subscribe({
      next:(res)=>{
        console.log('good');

        this.messagedetails.reset()

      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
