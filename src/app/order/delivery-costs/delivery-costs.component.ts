import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mf-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input() delivery : number
  @Input() itemsValue : number

  total() : number {
    return this.delivery + this.itemsValue
  }

  constructor() { }

  ngOnInit() {
  }

}
