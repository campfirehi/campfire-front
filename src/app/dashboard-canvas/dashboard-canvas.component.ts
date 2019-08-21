import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-canvas',
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
