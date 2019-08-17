import { Component, OnInit } from '@angular/core';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-dashboard-canvas',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './dashboard-canvas.component.html',
  styleUrls: ['./dashboard-canvas.component.scss']
})
export class DashboardCanvasComponent implements OnInit {

  constructor(){    
  }  
  
  ngOnInit() {
  }

  ngAfterViewInit() {
    var event = new Event('whiteboardReady');
    document.dispatchEvent(event);
  }

}
