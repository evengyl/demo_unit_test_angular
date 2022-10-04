import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService : UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers : [ UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    userService = TestBed.inject(UserService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('Réception du service ', () => { 
    expect(component.props).toBe(userService.props)
  })


  it('Peux être créé', () => { expect(component).toBeTruthy() })
})
