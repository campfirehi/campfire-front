import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetailedTopic, Stage } from '../../utility/services/topics/detailed-topic';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class DtTrackService {

  constructor(private httpClient: HttpClient) { }

  getDetailedTopic(id: string) : Observable<DetailedTopic> {
    const result: DetailedTopic = {
      topic: 'Homelessness',
      current_stage: {
        level: 1,
        name: 'Empathize',
        board_url: 'http://dfasdfasdf:1',
      },
      member_count: 12,
      topic_id: id,
      best_level: 3,
      max_level: 5
    }
    return of(result).pipe(delay(500));
  };

  getStageInfo(topicId: string, stepIndex: number): Observable<Stage> {
    const stage: Stage = {
      level: stepIndex + 1,
      name: 'stage name: ' + (stepIndex + 1),
      board_url: 'asdfasdfaa:' + (stepIndex + 1),
    }
    return of(stage).pipe(delay(500));
  }

}
