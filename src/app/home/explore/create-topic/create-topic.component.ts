import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/utility/services/topics/topic.service';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  newTopic: string;

  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit() {
  }

  createTopic() {

  }

}
