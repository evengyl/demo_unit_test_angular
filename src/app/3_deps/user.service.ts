import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  props : string = "Bonjour je suis dans le service"
  user : {} = {
    name: "loic",
    age : "42"
  }
  $user : BehaviorSubject<{}> = new BehaviorSubject<{}>(this.user)

  constructor() { }

  emit(){
    this.$user.next(this.user)
  }



}
