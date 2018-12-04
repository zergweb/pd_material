import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkPortfolioPageComponent } from './lk-portfolio-page.component';

describe('LkPortfolioPageComponent', () => {
  let component: LkPortfolioPageComponent;
  let fixture: ComponentFixture<LkPortfolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkPortfolioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkPortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
