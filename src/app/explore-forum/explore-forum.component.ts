import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-explore-forum',
  templateUrl: './explore-forum.component.html',
  styleUrls: ['./explore-forum.component.scss']
})
export class ExploreForumComponent implements OnInit {

  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['word']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
