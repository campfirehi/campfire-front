import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScriptLoadingService } from '../../../utility/services/scripts-loader/script-loading.service';
import { LoadingStateService } from '../../../utility/services/loading/loading-state.service';

declare var AwwBoard: any
declare var $: any
declare var initToolbar: any

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit, OnDestroy {

  constructor(
    private scriptLoader: ScriptLoadingService,
    private loadingService: LoadingStateService
  ) {
  }

  ngOnInit() {
    this.scriptLoader.load('whiteboard').then(data => {
      const aww = new AwwBoard('#aww-wrapper', {
        apiKey: '17b81ad8-cd02-4061-8475-9666eceace71',
        multiPage: true,
        sendUserPointer: true,
        showUserPointers: true
      });

      window['aww'] = aww

      $.ajax({
        'method': 'GET',
        'url': 'https://awwapp.com/static/widget/sample_toolbar.html'
      }).done((res, status) => {
        $('#aww-wrapper').append(res);

        // remove logo
        $('.logo__box').empty();

        this.scriptLoader.load('whiteboard_toolbar').then(data => {
          initToolbar();
          this.loadingService.setLoading(false);
        })
      });


    }).catch(error => console.log(error));
  }

  ngOnDestroy() {
    delete window['aww']
  }
}
