import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorFbComponent } from './profile-editor-fb.component';

describe('ProfileEditorFbComponent', () => {
  let component: ProfileEditorFbComponent;
  let fixture: ComponentFixture<ProfileEditorFbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorFbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorFbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
