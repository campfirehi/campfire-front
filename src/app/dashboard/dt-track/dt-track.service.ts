import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailedTopic } from '../topic/detailed-topic';
import { Observable, of } from 'rxjs';

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
        'name': 'Empathize'
      },
      'member_count': 12,
      'topic_id': id,
      'board_url': 'http://dfadsfasfd.com'
    }
    return of(result);
  };

}
