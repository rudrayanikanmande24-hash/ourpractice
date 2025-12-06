import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post1ListComponent } from './post1-list.component';

describe('Post1ListComponent', () => {
  let component: Post1ListComponent;
  let fixture: ComponentFixture<Post1ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post1ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
