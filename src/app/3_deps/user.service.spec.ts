import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('#getValue should return real value', () => {
    expect(service.user)
    .toEqual({name : "loic", age : "42"})
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
    service.$user.subscribe(value => {
      expect(value)
      .toEqual({name : "loic", age : "42"});
      done();
    });
  });

});
