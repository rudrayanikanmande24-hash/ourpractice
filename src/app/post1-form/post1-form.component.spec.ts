import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Post1FormComponent } from './post1-form.component';

describe('Post1FormComponent', () => {
  let component: Post1FormComponent;
  let fixture: ComponentFixture<Post1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Post1FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Post1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
