import { TestBed, inject } from '@angular/core/testing';

import { LoadingbarService } from './loadingbar.service';

describe('LoadingbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingbarService]
    });
  });

  it('should ...', inject([LoadingbarService], (service: LoadingbarService) => {
    expect(service).toBeTruthy();
  }));
});
