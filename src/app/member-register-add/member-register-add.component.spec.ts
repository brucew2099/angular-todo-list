import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRegisterAddComponent } from './member-register-add.component';

describe('MemberRegisterAddComponent', () => {
  let component: MemberRegisterAddComponent;
  let fixture: ComponentFixture<MemberRegisterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberRegisterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRegisterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
