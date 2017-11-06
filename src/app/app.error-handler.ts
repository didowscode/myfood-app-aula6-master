import { Response } from '@angular/http'
import { Observable } from 'rxjs'

export class ErrorHandler{

  static handlerError(error : Response | any){
      let messageError : string

      if(error instanceof Response) {
        messageError = `Erro ${error.status} ao acessar a url ${error.url} - ${error.statusText}`
      }else{
        messageError = error.toString()
      }

      console.log(messageError)
      return Observable.throw(messageError)
  }

}
