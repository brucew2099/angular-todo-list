import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberRegisterGetComponent } from './member-register-get.component';

describe('MemberRegisterGetComponent', () => {
  let component: MemberRegisterGetComponent;
  let fixture: ComponentFixture<MemberRegisterGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberRegisterGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberRegisterGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
