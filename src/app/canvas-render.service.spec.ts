import { TestBed, inject } from '@angular/core/testing';

import { CanvasRenderService } from './canvas-render.service';

describe('CanvasRenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanvasRenderService]
    });
  });

  it('should be created', inject([CanvasRenderService], (service: CanvasRenderService) => {
    expect(service).toBeTruthy();
  }));
});
