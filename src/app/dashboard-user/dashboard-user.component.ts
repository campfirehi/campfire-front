import { Component, OnInit } from '@angular/core';
import Topic from '../dashboard-topic/topic';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

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

}
