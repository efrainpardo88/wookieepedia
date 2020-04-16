import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBackgroundComponent } from './main-background.component';

describe('MainBackgroundComponent', () => {
  let component: MainBackgroundComponent;
  let fixture: ComponentFixture<MainBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
