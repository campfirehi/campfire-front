import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Topic from '../dashboard-topic/topic';

@Component({
  selector: 'app-dashboard-planning',
  templateUrl: './dashboard-planning.component.html',
  styleUrls: ['./dashboard-planning.component.scss']
})
export class DashboardPlanningComponent implements OnInit {

  topic: Topic

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.topic = JSON.parse(params["topic"]);
    });
  }

  ngOnInit() {
  }

}
