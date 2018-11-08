import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCascaderComponent } from './demo-cascader.component';

describe('DemoCascaderComponent', () => {
  let component: DemoCascaderComponent;
  let fixture: ComponentFixture<DemoCascaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCascaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCascaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
