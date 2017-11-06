import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms'

@Component({
  selector: 'mf-input-container',
  templateUrl: './input-container.component.html'
})
export class InputContainerComponent implements OnInit, AfterContentInit {

  @Input() label : string
  @Input() errorMessage : string

  input : any

  @ContentChild(NgModel) model : NgModel
  @ContentChild(FormControlName) control : FormControlName

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente obriga usar NgModel ou FormControlName')
    }
  }

  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(){
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }
}
