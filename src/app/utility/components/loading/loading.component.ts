import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input("screenHeight") screen;

  constructor() { }

  ngOnInit() {
  }

}
