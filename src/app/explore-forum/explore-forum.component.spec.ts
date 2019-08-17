import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreForumComponent } from './explore-forum.component';

describe('ExploreForumComponent', () => {
  let component: ExploreForumComponent;
  let fixture: ComponentFixture<ExploreForumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreForumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
