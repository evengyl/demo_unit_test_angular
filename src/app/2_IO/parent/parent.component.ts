import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  messageParent : string = ""

  constructor() { }

  ngOnInit(): void {
  }

  receiveInfoByChild(message : string){
    this.messageParent = message
  }

}
