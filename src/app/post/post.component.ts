import { Component , Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    phelabox:string;
    dusrabox:string;
    tsboxUrl:string;
    fboxUrl:string;
    vall:string='';
    beta:boolean=false;
    onc()
    {
      console.log("press");
      if(this.beta==false)
      {this.beta=true;
      }
      else
      {
        this.beta=false;
      }
    }
}

