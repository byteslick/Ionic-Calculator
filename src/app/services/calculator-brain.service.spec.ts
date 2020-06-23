import { TestBed } from '@angular/core/testing';

import { CalculatorBrainService } from './calculator-brain.service';

describe('CalculatorBrainService', () => {
  let service: CalculatorBrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorBrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
