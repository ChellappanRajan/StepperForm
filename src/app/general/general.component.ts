import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  viewProviders:[{provide: ControlContainer,useExisting: FormGroupDirective}]
})
export class GeneralComponent implements OnInit {

  form: FormGroup;

  constructor(private parentForm: FormGroupDirective){ 
 
  }

  ngOnInit() {

    this.form=this.parentForm.form;
    //Intiailise the form
    this.initForm();

  }

  initForm() {
    this.form.addControl('general',new FormGroup({
      name: new FormControl ( '',Validators.required ),
      email: new FormControl ( '',Validators.required )
    }))

    // this.form=new FormGroup({
    //   name: new FormControl ( '',Validators.required ),
    //   email: new FormControl ( '',Validators.required )
    // })
  }

}
