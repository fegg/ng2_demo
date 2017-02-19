/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AService } from './A.service';

describe('Service: A', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AService]
    });
  });

  it('should ...', inject([AService], (service: AService) => {
    expect(service).toBeTruthy();
  }));
});