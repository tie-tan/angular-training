import { Component,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    var1:string;
    var2:string;
    var3:string;
    arr:Array<any>=[];
  ram()
  {
    this.arr.push({
      "name":this.var1,
      "mail":this.var2,
      "address":this.var3,
    })
  }
  delfun(p){
    this.arr.splice(p);
  }
}
