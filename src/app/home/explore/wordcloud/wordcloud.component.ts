import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from '../../../utility/services/topics/topic.service';
import { DbTopic } from '../../../utility/services/topics/db-topic';
import { LoadingStateService } from '../../../utility/services/loading/loading-state.service';
import { ScriptLoadingService } from '../../../utility/services/scripts-loader/script-loading.service';

declare var TagCanvas: any

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss']
})
export class WordcloudComponent implements OnInit, AfterViewChecked {

  topics: Array<DbTopic> = []

  private populated = false

  constructor(
    private router: Router,
    private topicService: TopicService,
    private loadingService: LoadingStateService,
    private scriptLoader: ScriptLoadingService,
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true)
    this.topicService.getAllTopics().subscribe(topics => {
      this.topics = topics
    })
  }


  ngAfterViewChecked() {
    if (!this.populated && this.topics.length > 0) {
      this.populated = true
      this.scriptLoader.load('wordcloud').then(data => {
        this.initializeWordCloud()
        this.loadingService.setLoading(false)
      })
    }
  }

  getRandomColor() {
    const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return color;
  }

  explore(topic: DbTopic) {
    topic.data.members = []
    this.router.navigateByUrl('explore/' + topic.id, { state: topic })
    return false;
  }

  initializeWordCloud() {
    const options = {
      weight: true,
      bgColour: null,
      bgOutline: null,
      textColour: null,
      outlineColour: '#000000',
      outlineMethod: 'colour',
      weightFrom: 'data-weight',
      dragControl: true,

      clickToFront: 500,
      initial: [.1, 0],
    }
    try {
      TagCanvas.Start('myCanvas', '', options);
      //getRandomColor();
    } catch (e) {
      console.log(e);
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  }

  getWeight(index) {
    if (index == 0) {
      return 50;
    } else {
      return 100;
    }
  }
}


