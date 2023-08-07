import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersdataService } from '../service/usersdata.service';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { Injectable } from '@angular/core';
import { Task3Component } from './task3.component';

describe('Task3Component', () => {
  let component: Task3Component;
  let fixture: ComponentFixture<Task3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Task3Component],
      providers:[UsersdataService],
      imports: [AppRoutingModule,HttpClient]
    });
    fixture = TestBed.createComponent(Task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
