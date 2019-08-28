import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class LoadingStateService {
  private state = new BehaviorSubject({
    isLoading: false
  });

  constructor() {
  }

  get isLoading() {
    return this.state.pipe(map(c => c.isLoading))
  }

  public setLoading(loading: boolean) {
    this.state.next({ isLoading: loading });
  }
}