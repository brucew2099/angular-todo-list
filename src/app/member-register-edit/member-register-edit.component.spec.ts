import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRegisterEditComponent } from './member-register-edit.component';

describe('MemberRegisterEditComponent', () => {
  let component: MemberRegisterEditComponent;
  let fixture: ComponentFixture<MemberRegisterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberRegisterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
