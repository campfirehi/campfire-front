import { Component, OnInit, Input } from '@angular/core';
import { LoadingConfigService } from '../../services/loading/loading-config.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input("screenHeight") screenHeight;

  constructor(private loadingService: LoadingConfigService) { }

  ngOnInit() {
  }

  get isLoading() {
    return this.loadingService.isLoading
  }
}
