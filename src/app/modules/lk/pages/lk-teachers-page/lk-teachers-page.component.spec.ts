import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkTeachersPageComponent } from './lk-teachers-page.component';

describe('LkTeachersPageComponent', () => {
  let component: LkTeachersPageComponent;
  let fixture: ComponentFixture<LkTeachersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkTeachersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkTeachersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
