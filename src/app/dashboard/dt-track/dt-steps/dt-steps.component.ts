import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Stage } from '../../../utility/services/topics/detailed-topic';
import { Step } from './step/step.component';

@Component({
  selector: 'app-dt-steps',
  templateUrl: './dt-steps.component.html',
  styleUrls: ['./dt-steps.component.scss'],
})
export class DtStepsComponent implements OnInit {

  @Input('stage') stage: Stage;
  @Input('max-level') max_level: number;
  @Input('best-level') best_level: number;

  @Output() selected = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  getStep(index: number): Step {
    if (this.stage.level - 1 == index) {
      return Step.Current;
    } else if (this.best_level - 1 >= index) {
      return Step.Past;
    } else if (this.best_level - 1 < index) {
      return Step.Future;
    } 
  }

  onSelected(index: number) {
    this.selected.emit(index)
  }
}
