import { TestBed, async, inject } from '@angular/core/testing';
import { AdminGuardGuard } from './admin-guard';
import { ServicesModule } from '../services/services.module';

describe('AdminGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        ServicesModule.forRoot()
      ],
      providers: [AdminGuardGuard]
    });
  });

  it('should ...', inject([AdminGuardGuard], (guard: AdminGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
