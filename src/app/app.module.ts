import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';
import { Task2Component } from './task2/task2.component';
import { PostListComponent } from './post-list/post-list.component';
import { Task3Component } from './task3/task3.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FormComponent,
    Task2Component,
    PostListComponent,
    Task3Component,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/task3',pathMatch:'full'},
      {path: 'create',component:CreateComponent},
      {path: 'task3',component:Task3Component},
      {path: 'update',component:UpdateComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
