import { Component,Input,EventEmitter, OnInit} from '@angular/core';
import { FormControl, NgForm , FormGroup} from '@angular/forms';
import {UsersdataService} from './service/usersdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'ang-practice';
  
 }
