/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AritcleService } from './aritcle.service';

describe('Service: Aritcle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AritcleService]
    });
  });

  it('should ...', inject([AritcleService], (service: AritcleService) => {
    expect(service).toBeTruthy();
  }));
});