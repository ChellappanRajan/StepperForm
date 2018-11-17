import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Router Module
import { RouterModule } from '@angular/router';

//Forms Module

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Component Import
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { AddressComponent } from './address/address.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { StepperWrapperComponent } from './stepper-wrapper/stepper-wrapper.component';
import { StepComponent } from './step/step.component';

const routes=[
  {
   path: 'general', 
   component: GeneralComponent,
  },
  { 
    path: 'address',
    component: AddressComponent
   },
  {
    path: 'confirm',
    component: ConfirmComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    AddressComponent,
    ConfirmComponent,
    StepperWrapperComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
