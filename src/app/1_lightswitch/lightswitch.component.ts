import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lightswitch',
  templateUrl: './lightswitch.component.html'
})
export class LightswitchComponent implements OnInit {

  isOn : boolean = false
  message : string = `The light is ${this.isOn ? 'On' : 'Off'}`

  constructor() { }

  ngOnInit(): void {}


  clicked(){
    this.isOn = !this.isOn
  }

}
