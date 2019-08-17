import { Component, OnInit } from '@angular/core';
import { CanvasWhiteboardComponent, CanvasWhiteboardUpdate } from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-dashboard-canvas',
  viewProviders: [CanvasWhiteboardComponent],
  templateUrl: './dashboard-canvas.component.html',
  styleUrls: ['./dashboard-canvas.component.scss']
})
export class DashboardCanvasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    var event = new Event('whiteboardReady');
    document.dispatchEvent(event);
  }

  sendBatchUpdate(updates: CanvasWhiteboardUpdate[]) {
    console.log(updates);
  }
  onCanvasClear() {
    console.log("The canvas was cleared");
  }
  onCanvasUndo(updateUUID: string) {
    console.log(`UNDO with uuid: ${updateUUID}`);
  }
  onCanvasRedo(updateUUID: string) {
    console.log(`REDO with uuid: ${updateUUID}`);
  }
}
