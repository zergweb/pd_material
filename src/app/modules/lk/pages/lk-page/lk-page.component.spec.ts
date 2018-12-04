import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkPageComponent } from './lk-page.component';

describe('LkPageComponent', () => {
  let component: LkPageComponent;
  let fixture: ComponentFixture<LkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
