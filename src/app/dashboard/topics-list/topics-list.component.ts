import { Component, OnInit } from '@angular/core';
import Topic from '../../utility/services/topics/topic';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  topics = [
    new Topic("Homelessness", "Prototyping", 20, "dfasdf5dfsdf"),
    new Topic("Education", "Brainstorming", 17, "dfasdfddaf5dfsdf"),
    new Topic("Community Recycling", "Brainstorming", 32, "dfasdf56dfsdf"),
    new Topic("Public Transportation", "User Feedback", 14, "dfasd34f5dfsdf"),
    new Topic("Elderly Care", "Defining HMW", 25, "dfasdfdxcv5dfsdf"),
    new Topic("Teenage Support", "Brainstorming", 13, "dfasdf5dafasfdfsdf"),
  ]

  constructor() { }

  ngOnInit() {
  }

  getTotalMembers() {
    return this.topics.reduce((sum, currentTopic) => sum + currentTopic.member_count, 0);
  }
}
