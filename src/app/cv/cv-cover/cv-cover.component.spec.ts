import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCoverComponent } from './cv-cover.component';

describe('CvCoverComponent', () => {
  let component: CvCoverComponent;
  let fixture: ComponentFixture<CvCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
