import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtStepsComponent } from './dt-steps.component';

describe('DtStepsComponent', () => {
  let component: DtStepsComponent;
  let fixture: ComponentFixture<DtStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
