import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'mf-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem-vindo ao MyFood App!'

  constructor() { }

  ngOnInit() {
  }

}
