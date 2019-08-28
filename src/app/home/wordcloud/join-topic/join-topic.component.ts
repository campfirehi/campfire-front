import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { TopicService } from '../../../utility/services/topics/topic.service';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { DbTopic } from '../../../utility/services/topics/db-topic';
import { LoadingStateService } from '../../../utility/services/loading/loading-state.service';
import { AuthGuardService } from '../../../utility/services/auth/auth-guard';

@Component({
  selector: 'app-join-topic',
  templateUrl: './join-topic.component.html',
  styleUrls: ['./join-topic.component.scss']
})
export class JoinTopicComponent implements OnInit, OnDestroy {

  private state$: Subscription;
  private routeId$: Subscription;

  topic: DbTopic;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicService,
    private loadingService: LoadingStateService,
    private authGuardService: AuthGuardService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true);
    this.state$ = this.route.paramMap
      .pipe(map(() => window.history.state)).subscribe(topic => {
        if (Object.keys(topic).length == 1) {
          this.routeId$ = this.route.params.subscribe(
            params => {
              const topicId = params['topic'];
              this.topicService.getTopicById(topicId).subscribe(
                topic => {
                  this.topic = topic
                  this.loadingService.setLoading(false);
                }
              )
            }
          );
        } else {
          this.loadingService.setLoading(false);
          this.topic = topic
        }
      })

  }

  joinTopic() {
    if (this.authGuardService.isLoggedIn()) {
      this.loadingService.setLoading(true);
      this.topicService.joinTopic(this.topic).subscribe(() => {
        this.loadingService.setLoading(false);
        this.router.navigate(['dashboard'])
      },
      error => console.log(error))
    }
    else {
      this.router.navigateByUrl('login', {
        state: {
          'return': ['explore', this.topic.id]
        }
      })
    }
  }


  ngOnDestroy() {
    this.state$.unsubscribe()
    if (this.routeId$) {
      this.routeId$.unsubscribe()
    }
  }
}

