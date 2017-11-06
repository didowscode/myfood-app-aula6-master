import { EventEmitter } from '@angular/core'

export class SnackbarService{

  notifier = new EventEmitter<string>()

  notify(message : string){
    this.notifier.emit(message)
  }

}
