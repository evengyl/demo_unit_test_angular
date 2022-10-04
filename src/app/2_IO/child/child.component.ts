import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  @Output() emitter : EventEmitter<string> = new EventEmitter<string>()

  message : string = "Yeah message écrit dans l'enfant"

  constructor() {}

  ngOnInit(): void {
  }

  goToParent(){
    this.emitter.emit(this.message)
  }


}
