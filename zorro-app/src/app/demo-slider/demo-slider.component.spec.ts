import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSliderComponent } from './demo-slider.component';

describe('DemoSliderComponent', () => {
  let component: DemoSliderComponent;
  let fixture: ComponentFixture<DemoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
