import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoursesComponent } from './resourses.component';

describe('ResoursesComponent', () => {
  let component: ResoursesComponent;
  let fixture: ComponentFixture<ResoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
