import { TestBed } from '@angular/core/testing';

import { Post1Service } from './post1.service';

describe('Post1Service', () => {
  let service: Post1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
