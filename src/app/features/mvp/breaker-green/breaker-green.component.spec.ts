import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakerGreenComponent } from './breaker-green.component';

describe('BreakerGreenComponent', () => {
  let component: BreakerGreenComponent;
  let fixture: ComponentFixture<BreakerGreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreakerGreenComponent]
    });
    fixture = TestBed.createComponent(BreakerGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
