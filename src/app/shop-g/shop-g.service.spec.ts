import { TestBed } from '@angular/core/testing';

import { ShopGService } from './shop-g.service';

describe('ShopGService', () => {
  let service: ShopGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
