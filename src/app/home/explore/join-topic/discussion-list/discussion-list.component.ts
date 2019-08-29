import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {

  @Input("discussions") discussions;

  constructor() { }

  ngOnInit() {
  }

}
