/**
 * @Aayush Khanna
 * Trainee Technology
 *
 * This file contains blog services details
 */

//Imports
import { TestBed } from '@angular/core/testing';

import { BlogService } from './blog.service';

//Describing blog services and configuring them
describe('BlogService', () => {
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
