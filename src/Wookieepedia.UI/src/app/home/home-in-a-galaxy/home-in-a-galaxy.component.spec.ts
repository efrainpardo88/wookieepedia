import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInAGalaxyComponent } from './home-in-a-galaxy.component';

describe('HomeInAGalaxyComponent', () => {
  let component: HomeInAGalaxyComponent;
  let fixture: ComponentFixture<HomeInAGalaxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInAGalaxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInAGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
