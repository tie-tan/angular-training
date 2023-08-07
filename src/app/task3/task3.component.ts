import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersdataService } from '../service/usersdata.service';


@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  users:any;
  constructor(private userdata :UsersdataService, private http:HttpClient) 
  {

      this.users = userdata.arr
      console.log(this.users); 
  }

    ngOnInit(): void {
      this.userdata.observable$.subscribe(res =>{this.users = res})
    }
    del(i){
      this.users.splice(i,1);
      this.userdata.del(i);
    }
    edit(i){
      this.userdata.pel(i);
    }
  
}
