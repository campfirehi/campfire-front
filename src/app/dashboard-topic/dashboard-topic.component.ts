import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard-topic',
  templateUrl: './dashboard-topic.component.html',
  styleUrls: ['./dashboard-topic.component.scss']
})
export class DashboardTopicComponent implements OnInit {

  topic = "Homelessness";
  stage = "Prototyping";
  member_count = 20;

  constructor() { }

  ngOnInit() {
  }

  @HostListener("click") onClick(){
    console.log("User Click using Host Listener")
  }


}
