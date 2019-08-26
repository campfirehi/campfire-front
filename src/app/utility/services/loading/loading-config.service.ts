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
      console.log('loading service initialized')
    }

    get isLoading() {
        return this.config.pipe(map(c => c.isLoading))
    }

    public setLoading(loading: boolean) {
      console.log("setting loading to " + loading)
        this.config.next({isLoading: loading});
    }
}