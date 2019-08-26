import { Component, OnInit, OnDestroy } from '@angular/core';
import { DtTrackService } from './dt-track.service';
import { DetailedTopic, Stage } from '../../utility/services/topics/detailed-topic';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { LoadingConfigService } from 'src/app/utility/services/loading/loading-config.service';

@Component({
  selector: 'app-dt-track',
  templateUrl: './dt-track.component.html',
  styleUrls: ['./dt-track.component.scss']
})
export class DtTrackComponent implements OnInit, OnDestroy {

  detailedTopic: DetailedTopic;
  stage: Stage;

  private routeSubscriber: Subscription;
  private topicId: string

  constructor(
    private dtService: DtTrackService,
    private route: ActivatedRoute,
    private loadingService: LoadingConfigService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true);
    this.routeSubscriber = this.route.params.subscribe(
      params => {
        this.topicId = params['id'];
        this.dtService.getDetailedTopic(this.topicId).subscribe((received) => {
          this.detailedTopic = received
          this.stage = this.detailedTopic.current_stage;

          this.loadingService.setLoading(false)
        })
      }
    );

  }

  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }

  onStageSelected(index: number) {
    this.dtService.getStageInfo(this.topicId, index).subscribe((newStage) => {
      this.stage = newStage;
    })
  }
}
