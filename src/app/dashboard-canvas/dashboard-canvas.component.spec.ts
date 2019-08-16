import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCanvasComponent } from './dashboard-canvas.component';

describe('DashboardCanvasComponent', () => {
  let component: DashboardCanvasComponent;
  let fixture: ComponentFixture<DashboardCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
