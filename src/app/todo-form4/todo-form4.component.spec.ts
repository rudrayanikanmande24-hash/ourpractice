import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoForm4Component } from './todo-form4.component';

describe('TodoForm4Component', () => {
  let component: TodoForm4Component;
  let fixture: ComponentFixture<TodoForm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoForm4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
