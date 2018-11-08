import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTreeComponent } from './demo-tree.component';

describe('DemoTreeComponent', () => {
  let component: DemoTreeComponent;
  let fixture: ComponentFixture<DemoTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
