import { Component, OnInit, Input } from '@angular/core';
import { LoadingStateService } from '../../services/loading/loading-state.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input("screenHeight") screenHeight;

  constructor(private loadingService: LoadingStateService) { }

  ngOnInit() {
  }

  get isLoading() {
    return this.loadingService.isLoading
  }
}
