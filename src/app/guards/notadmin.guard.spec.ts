import { TestBed, async, inject } from '@angular/core/testing';

import { NotadminGuard } from './notadmin.guard';

describe('NotadminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotadminGuard]
    });
  });

  it('should ...', inject([NotadminGuard], (guard: NotadminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
