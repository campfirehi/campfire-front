import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export enum Step {
  Past = 'lightgreen',
  Current = 'green',
  Future = 'lightgrey'
}

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input('step') step: Step
  @Input('index') index: number;

  @Output() selected = new EventEmitter<number>();

  stepStyle;

  constructor() { }

  ngOnInit() {
    this.stepStyle = {
      'background-color': this.step.valueOf(),
      'cursor': this.step != Step.Future ? 'pointer' : 'not-allowed'
    };

  }

  selectStage() {
    if (this.step != Step.Future) {
      this.selected.emit(this.index);
    }
  }
}
