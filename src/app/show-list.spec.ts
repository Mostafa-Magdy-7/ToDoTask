import { TestBed } from '@angular/core/testing';

import { ShowList } from './show-list';

describe('ShowList', () => {
  let service: ShowList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
