import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class LoadingConfigService {
  private config = new BehaviorSubject({
    isLoading: false
  });

  constructor() {
  }

  get isLoading() {
    return this.config.pipe(map(c => c.isLoading))
  }

  public setLoading(loading: boolean) {
    this.config.next({ isLoading: loading });
  }
}