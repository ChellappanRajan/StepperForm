import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'stepper-wrapper',
  templateUrl: './stepper-wrapper.component.html',
  styleUrls: ['./stepper-wrapper.component.scss']
})
export class StepperWrapperComponent implements OnInit {

 form = new FormGroup( { } );
 
  constructor() { }

  ngOnInit() {
  }

}
