import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/utility/services/topics/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  newTopic: string;

  constructor(
    private topicService: TopicService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createTopic() {
    this.topicService.createTopic(this.newTopic).subscribe(
      docRef => {
        this.router.navigate(['explore', docRef.id])
      }
    )
  }

}
