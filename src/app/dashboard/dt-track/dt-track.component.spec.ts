import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtTrackComponent } from './dt-track.component';

describe('DtTrackComponent', () => {
  let component: DtTrackComponent;
  let fixture: ComponentFixture<DtTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
