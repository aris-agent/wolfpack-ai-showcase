import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIndex } from './blog-index';

describe('BlogIndex', () => {
  let component: BlogIndex;
  let fixture: ComponentFixture<BlogIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogIndex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
