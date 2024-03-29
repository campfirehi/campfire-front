import { Component, OnInit } from '@angular/core';
import { ScreenDimensionService } from '../../utility/services/screen-dimension/screen-dimension.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

  minHeight: number = 30000

  constructor(
    private screenDimService: ScreenDimensionService
  ) { }

  ngOnInit() {
    this.screenDimService.minHeight.subscribe(height => {
      this.minHeight = Math.min(height, this.minHeight)
    })

    this.screenDimService.contentHeight.subscribe(height => {
      this.minHeight = Math.min(height, this.minHeight)
    })
  }

}
