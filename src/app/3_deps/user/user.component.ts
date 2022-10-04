import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  props : string =""

  constructor(private userS : UserService) { }

  ngOnInit(): void {
    this.props = this.userS.props
  }

}
