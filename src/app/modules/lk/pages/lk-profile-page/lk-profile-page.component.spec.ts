import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkProfilePageComponent } from './lk-profile-page.component';

describe('LkProfilePageComponent', () => {
  let component: LkProfilePageComponent;
  let fixture: ComponentFixture<LkProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
