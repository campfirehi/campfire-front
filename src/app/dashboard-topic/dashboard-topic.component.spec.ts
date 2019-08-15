import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTopicComponent } from './dashboard-topic.component';

describe('DashboardTopicComponent', () => {
  let component: DashboardTopicComponent;
  let fixture: ComponentFixture<DashboardTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
