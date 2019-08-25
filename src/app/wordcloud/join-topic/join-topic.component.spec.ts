import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTopicComponent } from './join-topic.component';

describe('JoinTopicComponent', () => {
  let component: JoinTopicComponent;
  let fixture: ComponentFixture<JoinTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
