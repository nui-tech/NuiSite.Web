import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtEditorComponent } from './txt-editor.component';

describe('TxtEditorComponent', () => {
  let component: TxtEditorComponent;
  let fixture: ComponentFixture<TxtEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxtEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
