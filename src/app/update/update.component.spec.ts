import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersdataService } from '../service/usersdata.service';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { UpdateComponent } from './update.component';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateComponent],
      providers:[UsersdataService],
      imports: [AppRoutingModule,HttpClient]

    });
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
