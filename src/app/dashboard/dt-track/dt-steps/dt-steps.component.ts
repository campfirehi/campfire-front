import { Component, OnInit, Input } from '@angular/core';
import { Stage } from '../../topics-list/topic/detailed-topic';
import { Step } from './step/step.component';

@Component({
  selector: 'app-dt-steps',
  templateUrl: './dt-steps.component.html',
  styleUrls: ['./dt-steps.component.scss'],
})
export class DtStepsComponent implements OnInit {

  @Input('stage') stage: Stage;

  constructor() { }

  ngOnInit() {
  }

  getStep(index: number): Step {
    if (this.stage.level - 1 == index) {
      return Step.Current;
    } else if (this.stage.level - 1 > index) {
      return Step.Past;
    } else if (this.stage.level - 1 < index) {
      return Step.Future;
    }
  }

}
