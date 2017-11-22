import { TestBed, async, inject } from '@angular/core/testing';

describe('AdminGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminGuardGuard]
    });
  });

  it('should ...', inject([AdminGuardGuard], (guard: AdminGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
