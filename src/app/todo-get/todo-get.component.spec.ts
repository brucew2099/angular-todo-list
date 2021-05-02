import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGetComponent } from './todo-get.component';

describe('TodoGetComponent', () => {
  let component: TodoGetComponent;
  let fixture: ComponentFixture<TodoGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
