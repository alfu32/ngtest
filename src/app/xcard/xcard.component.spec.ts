import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcardComponent } from './xcard.component';

describe('XcardComponent', () => {
  let component: XcardComponent;
  let fixture: ComponentFixture<XcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
