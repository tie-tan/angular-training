import { Component } from '@angular/core';


@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {
  pas1:string;
  pas2:string;
  tf:boolean;
  onsubmit()
  {
    if(this.pas1!=this.pas2){
      alert ("\nPassword did not match: Please try again...")
    }
  }
}
