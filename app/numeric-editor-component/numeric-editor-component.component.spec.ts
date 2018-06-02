import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericEditorComponentComponent } from './numeric-editor-component.component';

describe('NumericEditorComponentComponent', () => {
  let component: NumericEditorComponentComponent;
  let fixture: ComponentFixture<NumericEditorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericEditorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
