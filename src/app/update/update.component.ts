import { Component } from '@angular/core';
import { UsersdataService } from '../service/usersdata.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  index:number;
  users:any;
  titl:string;
  bod:string;
  
  constructor(private userdata :UsersdataService, private http:HttpClient) 
  {
      this.users = this.userdata.arr;
      this.index = this.userdata.ind;
      console.log(this.index); 
      this.titl=this.users[this.index].title;
      this.bod=this.users[this.index].body;
  }
  upd(){
    this.userdata.arr[this.index].title=this.titl;
    this.userdata.arr[this.index].body=this.bod;
  }
}
