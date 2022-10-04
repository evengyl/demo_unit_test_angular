import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  props : string = "Bonjour je suis dans le service"

  constructor() { }
}
