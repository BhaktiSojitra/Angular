import { TestBed } from '@angular/core/testing';

import { MockAPIFacultyService } from './mock-api-faculty.service';

describe('MockAPIFacultyService', () => {
  let service: MockAPIFacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockAPIFacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
