/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AriticleComponent } from './ariticle.component';

describe('AriticleComponent', () => {
  let component: AriticleComponent;
  let fixture: ComponentFixture<AriticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AriticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AriticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});