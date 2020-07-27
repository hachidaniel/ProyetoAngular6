import { TestBed, inject } from '@angular/core/testing';

import { OrderDatailService } from './order-datail.service';

describe('OrderDatailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderDatailService]
    });
  });

  it('should be created', inject([OrderDatailService], (service: OrderDatailService) => {
    expect(service).toBeTruthy();
  }));
});
