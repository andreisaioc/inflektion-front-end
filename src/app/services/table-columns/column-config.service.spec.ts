import { TestBed } from '@angular/core/testing';

import { ColumnConfigService } from './column-config.service';

describe('ColumnConfigService', () => {
  let service: ColumnConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColumnConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
