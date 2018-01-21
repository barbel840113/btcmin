import { TestBed, inject } from '@angular/core/testing';
import { DialogAppService} from './dialogModal.service';

describe('LoadingbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogAppService]
    });
  });

  it('should ...', inject([DialogAppService], (service: DialogAppService) => {
    expect(service).toBeTruthy();
  }));
});
