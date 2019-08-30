import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.scss']
})
export class DiscussionListComponent implements OnInit {

  @Input("discussions") discussions;

  animation: string = ''

  constructor() { }

  ngOnInit() {
  }

  like(index) {
    this.animation = 'is_animating'
    console.log(this.discussions[index])
  }

  
}

