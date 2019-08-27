import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
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

  simpleTopic: Topic

  constructor(private router: Router) { }

  ngOnInit() {
    this.simpleTopic = this.toTopic(this.topic)
  }

  redirect() {
    this.topic.data.members = this.topic.data.members.map((docRef) => docRef.id)
    this.router.navigateByUrl('dashboard/topic/' + this.simpleTopic.topic_id,  {state: this.topic})
  }

  toTopic(dbTopic: DbTopic) {
    const lastIteration = dbTopic.data.iterations[dbTopic.data.iterations.length - 1]
    return new Topic(dbTopic.data.topic, TopicService.convertStageIndexToName(lastIteration.stages.length - 1),
      dbTopic.data.members.length, dbTopic.id)
  }

}
