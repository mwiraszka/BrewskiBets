import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BetService } from './bet.service';

describe('BetService', () => {
  let service: BetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
