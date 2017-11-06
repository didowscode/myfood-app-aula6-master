import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { RadioOption } from './radio-option.model'

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'mf-radio-option',
  templateUrl: './radio-option.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioOptionComponent),
      multi: true
    }
  ]
})
export class RadioOptionComponent implements OnInit, ControlValueAccessor {

  @Input() options : RadioOption[]

  value : any
  onChange : any

  constructor() { }

  setValue(selected : any){
    this.value = selected
    this.onChange(this.value)
  }

  ngOnInit() {
  }

  writeValue(value : any){
    this.value = value
  }

  registerOnChange(fn : any){
    this.onChange = fn
  }

  registerOnTouched(fn : any){ }

}
