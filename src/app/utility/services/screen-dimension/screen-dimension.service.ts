import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class ScreenDimensionService {

  private state = new BehaviorSubject({
    minHeight: 100,
    contentHeight: 100
  });

  constructor() {
  }

  get minHeight() {
    return this.state.pipe(map(c => c.minHeight))
  }

  get contentHeight() {
    return this.state.pipe(map(c => c.contentHeight))
  }

  public setMinHeight(newMinHeight: number) {
    this.state.next({ minHeight: newMinHeight, contentHeight: this.state.value.contentHeight });
  }

  public setContentHeight(newContentHeight: number) {
    this.state.next({ minHeight: this.state.value.minHeight, contentHeight: newContentHeight });
  }
}