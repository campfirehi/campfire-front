import { Component, OnInit } from '@angular/core';
import Topic from '../../utility/services/topics/topic';
import { TopicService } from '../../utility/services/topics/topic.service';
import { DbTopic } from '../../utility/services/topics/db-topic';
import { LoadingConfigService } from '../../utility/services/loading/loading-config.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  topics: Array<DbTopic> = []

  constructor(
    private topicService: TopicService,
    private loadingService: LoadingConfigService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true);
    this.topicService.getTopicsByUser().subscribe(dbTopic => {
      this.topics.push(dbTopic)
      this.loadingService.setLoading(false);
    })
  }

  getTotalMembers() {
    return this.topics.reduce((sum, currentTopic) => sum + currentTopic.data.members.length, 0);
  }

}
