import { Component, OnInit, OnDestroy } from '@angular/core';
import { DetailedTopic, Stage } from '../../utility/services/topics/detailed-topic';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingConfigService } from 'src/app/utility/services/loading/loading-config.service';
import { map } from 'rxjs/operators';
import { TopicService } from '../../utility/services/topics/topic.service';
import { DbTopic } from '../../utility/services/topics/db-topic';

@Component({
  selector: 'app-dt-track',
  templateUrl: './dt-track.component.html',
  styleUrls: ['./dt-track.component.scss']
})
export class DtTrackComponent implements OnInit, OnDestroy {

  detailedTopic: DetailedTopic;
  stage: Stage;

  private dbTopic: DbTopic;
  private state$: Subscription;
  private routeId$: Subscription;

  constructor(
    private topicService: TopicService,
    private route: ActivatedRoute,
    private loadingService: LoadingConfigService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true)

    this.state$ = this.route.paramMap
      .pipe(map(() => window.history.state)).subscribe(topic => {
        if (Object.keys(topic).length == 1) {
          this.fetchTopicFromDb()
        } else {
          this.loadingService.setLoading(false);
          this.detailedTopic = this.toDetailedTopic(topic)
          this.dbTopic = topic
          this.stage = this.detailedTopic.current_stage
        }
      })
  }

  onStageSelected(index: number) {
    this.stage = this.getStage(this.dbTopic, index)
  }

  toDetailedTopic(dbTopic: DbTopic): DetailedTopic {
    const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1]

    return {
      topic: dbTopic.data.topic,
      current_stage: this.getStage(dbTopic, lastIteration.stages.length - 1),
      member_count: dbTopic.data.members.length,
      topic_id: dbTopic.id,
      best_level: lastIteration.stages.length - 1,
      max_level: 5
    }
  }

  getStage(dbTopic: DbTopic, index: number): Stage {
    const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1]
    const stage = lastIteration.stages[index]
    return {
      level: index,
      name: TopicService.convertStageIndexToName(index),
      board_url: stage.board_url
    }
  }

  ngOnDestroy() {
    this.state$.unsubscribe()
    if (this.routeId$) {
      this.routeId$.unsubscribe()
    }
  }

  fetchTopicFromDb() {
    this.routeId$ = this.route.params.subscribe(
      params => {
        const topicId = params['id'];
        this.topicService.getTopicById(topicId).subscribe(
          topic => {
            this.detailedTopic = this.toDetailedTopic(topic)
            this.loadingService.setLoading(false);
            this.dbTopic = topic;
            this.stage = this.detailedTopic.current_stage
          }
        )
      }
    )
  }
}