import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-topic',
  templateUrl: './dashboard-topic.component.html',
  styleUrls: ['./dashboard-topic.component.scss']
})
export class DashboardTopicComponent implements OnInit {

  topic = "Homelessness";
  stage = "Prototyping";
  member_count = 20;
  topic_id = "sadfsadf3ri3dfsdfa"

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    this.router.navigate(['dashboard', 'topic', this.topic_id]);
  }


}
