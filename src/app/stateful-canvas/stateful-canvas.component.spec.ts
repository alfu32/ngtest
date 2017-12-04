import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulCanvasComponent } from './stateful-canvas.component';

describe('StatefulCanvasComponent', () => {
  let component: StatefulCanvasComponent;
  let fixture: ComponentFixture<StatefulCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
