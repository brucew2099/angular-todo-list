import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLogoutComponent } from './member-logout.component';

describe('MemberLogoutComponent', () => {
  let component: MemberLogoutComponent;
  let fixture: ComponentFixture<MemberLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
