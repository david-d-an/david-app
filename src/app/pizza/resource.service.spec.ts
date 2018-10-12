import { TestBed } from '@angular/core/testing';

import { ResourceService } from './resource.service';
import { Pizza } from '../model/pizza';

describe('ResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResourceService<Pizza> = TestBed.get(ResourceService);
    expect(service).toBeTruthy();
  });
});
