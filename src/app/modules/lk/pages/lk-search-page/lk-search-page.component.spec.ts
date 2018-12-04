import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkSearchPageComponent } from './lk-search-page.component';

describe('LkSearchPageComponent', () => {
  let component: LkSearchPageComponent;
  let fixture: ComponentFixture<LkSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
