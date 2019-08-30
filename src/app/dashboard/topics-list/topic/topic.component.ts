import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Topic from '../../../utility/services/topics/topic';
import { DbTopic } from '../../../utility/services/topics/db-topic';
import { TopicService } from '../../../utility/services/topics/topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  @Input() topic: DbTopic
  @Output() leftTopic = new EventEmitter<DbTopic>();

  simpleTopic: Topic

  constructor(
    private router: Router,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.simpleTopic = this.toTopic(this.topic)
  }

  redirect() {
    this.topic.data.members = this.topic.data.members.map((docRef) => docRef.id)
    this.router.navigateByUrl('dashboard/topic/' + this.simpleTopic.topic_id, { state: this.topic })
  }

  toTopic(dbTopic: DbTopic) {
    const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1]
    return new Topic(dbTopic.data.topic, TopicService.convertStageIndexToName(lastIteration.stages.length - 1),
      dbTopic.data.members.length, dbTopic.id)
  }

  leaveTopic() {
    this.topicService.leaveTopic(this.topic.id).subscribe(() => {
      this.leftTopic.emit(this.topic)
    })
  }

}
