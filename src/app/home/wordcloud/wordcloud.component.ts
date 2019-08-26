import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { TopicService } from '../../utility/services/topics/topic.service';
import { DbTopic } from '../../utility/services/topics/db-topic';
import { LoadingConfigService } from '../../utility/services/loading/loading-config.service';

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
    private loadingService: LoadingConfigService
  ) { }

  ngOnInit() {
    this.loadingService.setLoading(true)
    this.topicService.getAllTopics().subscribe(topics => {
      this.topics = topics
    })
  }


  ngAfterViewChecked() {
    if (!this.populated && this.topics.length > 0) {
      this.initializeWordCloud()
      this.populated = true
      this.loadingService.setLoading(false)
    }
  }

  getRandomColor() {
    const color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    return color;
  }

  explore(topic: DbTopic) {
    // this.router.navigate(['explore', topic.id])
    topic.data.members = []
    this.router.navigateByUrl('explore/' + topic.id,  {state: topic})
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
}


