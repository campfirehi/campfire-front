import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {

  topics = [
    {
      "topic": 1
    },
    {
      "topic": 2
    },
    {
      "topic": 3
    },
    {
      "topic": 4
    },
    {
      "topic": 5
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
