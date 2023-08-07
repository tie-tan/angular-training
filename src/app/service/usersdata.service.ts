import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
    arr:any;
    ind:number;
    url='https://jsonplaceholder.typicode.com/posts';
    constructor (private http: HttpClient) {
      this.users()
    }
    users(){
      this.http.get(this.url).subscribe((data)=>{
        this.arr=data;
      });
  
    }
    observable$ = new Observable(data=>{
      setTimeout(()=>data.next(this.arr),2000)
    })

    usersgetdata(data:any){
      this.arr.push({
        userId: 11,
        id: this.arr.length+1,
        title:data.title,
        body:data.body
      })
    }
    del(i){
      this.arr.splice(i,1);
    }
    pel(i)
    {
      this.ind=i;
    }

}
