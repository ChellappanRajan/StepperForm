import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  ControlContainer,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class ConfirmComponent implements OnInit {
  toggleClass = false;
  form: FormGroup;
  @Output('confirmButton') confirmButton = new EventEmitter(false);

  constructor(private fgd: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.fgd.form;
    this.fgd.form.addControl(
      'confirmaddress',
      new FormGroup({
        address1: new FormControl('', Validators.required),
        address2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      })
    );
  }
  sameAddress() {
    console.log(this.fgd);
    this.confirmButton.emit(true);
    this.toggleClass = !this.toggleClass;
  }
}
