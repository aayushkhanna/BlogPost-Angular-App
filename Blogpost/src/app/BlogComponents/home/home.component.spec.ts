/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file contains the information about the blog posted
 */

//Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

//Describing the home component
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
