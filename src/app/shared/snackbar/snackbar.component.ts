import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition} from '@angular/animations'
import { SnackbarService } from './snackbar.service'
import { Observable } from 'rxjs'
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'

@Component({
  selector: 'mf-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snackbar-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),

      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  toggleSnackbar(){
    this.snackbarVisibility = this.snackbarVisibility === 'hidden' ? 'visible' : 'hidden'
  }

  message : string = 'Olá mundo!!!'

  snackbarVisibility = 'hidden'

  constructor(private snackbarService : SnackbarService) { }

  ngOnInit() {
    this.snackbarService.notifier.do(message => {
      this.message = message
      this.snackbarVisibility = 'visible'
    }).switchMap(message => Observable.timer(3000))
    .subscribe(timer => {
      this.snackbarVisibility = 'hidden'
    })
  }



}
