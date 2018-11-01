import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBrithday1Component } from './hero-brithday1.component';

describe('HeroBrithday1Component', () => {
  let component: HeroBrithday1Component;
  let fixture: ComponentFixture<HeroBrithday1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBrithday1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBrithday1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
