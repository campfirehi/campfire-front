import { Component, OnInit, OnDestroy } from '@angular/core';
import { DtTrackService } from './dt-track.service';
import { DetailedTopic } from '../topic/detailed-topic';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dt-track',
  templateUrl: './dt-track.component.html',
  styleUrls: ['./dt-track.component.scss']
})
export class DtTrackComponent implements OnInit, OnDestroy {

  detailedTopic: DetailedTopic;
  private routeSubscriber: any;


  constructor(private dtService: DtTrackService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscriber = this.route.params.subscribe(
      params => {
        const topicId = params['id'];
        
        this.dtService.getDetailedTopic(topicId).subscribe(
          (result: DetailedTopic) => this.detailedTopic = result
        )
      }
    );

  }


  ngOnDestroy() {
    this.routeSubscriber.unsubscribe();
  }
}
