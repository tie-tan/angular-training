import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersdataService } from '../service/usersdata.service';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { Injectable } from '@angular/core';
import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComponent],
      providers:[UsersdataService],
      imports: [AppRoutingModule,HttpClient]
    });
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
