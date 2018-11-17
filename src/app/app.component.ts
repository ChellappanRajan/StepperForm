import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'stepperForm';
  nextForm = false;
  form = new FormGroup({});
  addressform = new FormGroup({});
  confirm = new FormGroup({});
  confirmForm = false;
  constructor() {}

  moveToNext() {
    if (this.form.valid) {
      this.nextForm = true;
    }
  }

  previous() {
    this.nextForm = false;
    this.confirmForm = false;
  }

  nextToConfirm() {
    this.confirmForm = true;
  }

  previousToConfirm() {
    this.confirmForm = false;
  }

  onSubmit() {}

  confirmAddress($event) {
    console.log(this.addressform.value.address);
    this.confirm.get('confirmaddress').patchValue(this.addressform.value.address);
  }
}
