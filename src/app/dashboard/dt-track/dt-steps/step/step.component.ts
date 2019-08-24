import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export enum Step {
  Past = 'lightgreen',
  Current = 'green',
  Future = 'lightgrey'
}

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepComponent implements OnInit {

  @Input('step') step: Step
  @Input('index') index: number;

  @Output() selected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getCursor() {
    return this.step != Step.Future ? 'pointer' : 'not-allowed';
  }

  getBg() {
    return this.step.valueOf();
  }

  selectStage() {
    if (this.step != Step.Future) {
      this.selected.emit(this.index);
    }
  }
}
