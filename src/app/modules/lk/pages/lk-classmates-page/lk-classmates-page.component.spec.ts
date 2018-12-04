import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkClassmatesPageComponent } from './lk-classmates-page.component';

describe('LkClassmatesPageComponent', () => {
  let component: LkClassmatesPageComponent;
  let fixture: ComponentFixture<LkClassmatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkClassmatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkClassmatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
