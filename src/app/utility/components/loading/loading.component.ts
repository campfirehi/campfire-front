import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LoadingConfigService } from '../../services/loading/loading-config.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnChanges {

  @Input("screenHeight") screenHeight;

  constructor(private loadingService: LoadingConfigService) { }

  ngOnInit() {
  }
  ngOnChanges(cnanges) {
    console.log(cnanges)
  }
}
