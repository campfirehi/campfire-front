import { Component, OnInit } from '@angular/core';
import { ScreenDimensionService } from '../../utility/services/screen-dimension/screen-dimension.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  wordCloudHeight: number = null

  constructor(
    private screenDimService: ScreenDimensionService
  ) { }

  ngOnInit() {
    this.screenDimService.minHeight.subscribe(height => {
      this.wordCloudHeight = Math.ceil(height * 0.75);
    })
  }

}
