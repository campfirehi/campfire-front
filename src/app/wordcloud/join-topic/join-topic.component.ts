import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TopicService } from 'src/app/utility/services/topics/topic.service';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { DbTopic } from 'src/app/utility/services/topics/db-topic';

@Component({
  selector: 'app-join-topic',
  templateUrl: './join-topic.component.html',
  styleUrls: ['./join-topic.component.scss']
})
export class JoinTopicComponent implements OnInit, OnDestroy {

  private state: Subscription;
  private routeId: Subscription;

  topic: DbTopic;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afAuth: AngularFireAuth,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.state = this.route.paramMap
      .pipe(map(() => window.history.state)).subscribe(topic => {
        if (Object.keys(topic).length == 1) {
          this.routeId = this.route.params.subscribe(
            params => {
              const topicId = params['topic'];
              this.topicService.getTopicById(topicId).subscribe(
                topic => this.topic = topic
              )
            }
          );
        } else {
          this.topic = topic
        }
      })

  }

  joinTopic() {
    this.afAuth.user.subscribe(
      user => {
        if (user) {
          // this.topicService.joinTopic(user, this.topic).subscribe(() => {
          //   this.router.navigate(['dashboard'])
          // })
          this.topicService.getTopicsByUser(user).subscribe(a => console.log(a))

        } else {

          console.log('not logged in')
        }
      }
    )
  }


  ngOnDestroy() {
    this.state.unsubscribe()
    if (this.routeId) {
      this.routeId.unsubscribe()
    }
  }
}

