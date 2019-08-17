import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import Topic from './topic';

@Component({
  selector: 'app-dashboard-topic',
  templateUrl: './dashboard-topic.component.html',
  styleUrls: ['./dashboard-topic.component.scss']
})
export class DashboardTopicComponent implements OnInit {

  @Input() topic: Topic

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "topic": JSON.stringify(this.topic)
      }
  };
    this.router.navigate(['dashboard', 'topic', this.topic.topic_id], navigationExtras);
  }


}
