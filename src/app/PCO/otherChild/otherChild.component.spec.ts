/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OtherChildComponent } from './otherChild.component';

describe('OtherChildComponent', () => {
  let component: OtherChildComponent;
  let fixture: ComponentFixture<OtherChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});