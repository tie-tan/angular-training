import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UsersdataService } from '../service/usersdata.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  title:string='';
  body:string='';
  constructor(private userdata :UsersdataService) { 
    console.log(this.title);
    
   }
  details(data:any)
    {
      this.userdata.usersgetdata(data);
    }
}
