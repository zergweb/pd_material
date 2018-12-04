import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LkCertificatesPageComponent } from './lk-certificates-page.component';

describe('LkCertificatesPageComponent', () => {
  let component: LkCertificatesPageComponent;
  let fixture: ComponentFixture<LkCertificatesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LkCertificatesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LkCertificatesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
