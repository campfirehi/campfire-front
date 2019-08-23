import { Component, OnInit, Input } from '@angular/core';

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

  @Input('step') active: Step
  backgroundColor: string


  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.active.valueOf()
  }

}
