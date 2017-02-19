/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BService } from './B.service';

describe('Service: B', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BService]
    });
  });

  it('should ...', inject([BService], (service: BService) => {
    expect(service).toBeTruthy();
  }));
});