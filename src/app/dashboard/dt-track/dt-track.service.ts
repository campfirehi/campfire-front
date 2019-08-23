import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailedTopic } from '../topics-list/topic/detailed-topic';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DtTrackService {

  constructor(private httpClient: HttpClient) { }

  getDetailedTopic(id: string) : Observable<DetailedTopic> {
    const result: DetailedTopic = {
      'topic': 'Homelessness',
      'stage': {
        'level': 1,
        'name': 'Empathize',
        'max_stage': 5
      },
      'member_count': 12,
      'topic_id': id,
      'board_url': 'http://dfadsfasfd.com'
    }
    return of(result).pipe(delay(500));
  };

}
