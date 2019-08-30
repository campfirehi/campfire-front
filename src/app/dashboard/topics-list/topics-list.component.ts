import { Component, OnInit } from '@angular/core';
import { TopicService } from '../../utility/services/topics/topic.service';
import { DbTopic } from '../../utility/services/topics/db-topic';
import { LoadingStateService } from '../../utility/services/loading/loading-state.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  topics: Array<DbTopic> = []

  constructor(
    private topicService: TopicService,
    private loadingService: LoadingStateService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true);
    // this.topicService.getTopicsByUser().subscribe((dbTopic : DbTopic) => {
    //   console.log('pushing new topic: ' + dbTopic.data.topic)
    //   this.topics.push(dbTopic)
    //   this.loadingService.setLoading(false);
    //   console.log('length: ' + this.topics.length)
    // })

    this.topicService.getTopicsByUser().subscribe(a => {
      console.log(a)
    })
  }

  getTotalMembers() {
    return this.topics.reduce((sum, currentTopic) => sum + currentTopic.data.members.length, 0);
  }

  onLeaveTopic(topic: DbTopic) {
    console.log('leaving ' + topic.data.topic)
    const index = this.topics.indexOf(topic)
    if (index != -1) {
      console.log('i found ' + topic.data.topic)
      console.log('before length: ' + this.topics.length)
      this.topics.splice(index, 1)
      console.log(this.topics)

      console.log('after length: ' + this.topics.length)
    } else {
      console.log('no found ' + topic.data.topic)
    }
  }

}
