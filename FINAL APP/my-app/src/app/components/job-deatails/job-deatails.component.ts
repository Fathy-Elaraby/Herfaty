import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GigsService } from 'src/app/services/gigs.service';

@Component({
  selector: 'app-job-deatails',
  templateUrl: './job-deatails.component.html',
  styleUrls: ['./job-deatails.component.css',
  '../../../assets/assets/css/main.css',
              '../../../assets/assets/css/bootstrap-select.min.css',
              '../../../assets/assets/css/slicknav.css',
              '../../../assets/assets/css/responsive.css',
  
              '../../../assets/assets/fonts/line-icons/line-icons.css',
              '../../../assets/assets/fonts/line-icons/line-icons.css',
              '../../../assets/assets/css/font-awesome.min.css',
            
              '../../../assets/assets/css/jasny-bootstrap.min.css',
              '../../../assets/assets/css/jasny-bootstrap.min.css',
              '../../../assets/assets/css/bootstrap.min.css'
]
})
export class JobDeatailsComponent implements OnInit {
 

  constructor(private myservices:GigsService,private myactiveRoute:ActivatedRoute) { }
  gigs:any = []
  data: any=[]
  id:any
  ngOnInit(): void {
    this.id = this.myactiveRoute.snapshot.params['id']
    this.getOne()
 /*   .subscribe({
      next:(gigs)=>{
        console.log(gigs)
        this.gigs = gigs
      }
    })*/
  }
  getOne(){
    this.myservices.getOne(this.id).subscribe(data=>
      {
        this.data = data
        console.log(data)
      })
  }
}
