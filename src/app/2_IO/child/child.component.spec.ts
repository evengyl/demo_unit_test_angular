import { ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('test', () => {
    const comp = new ChildComponent()
    const messagepassed = "Bonjour je suis le test"
    comp.message = messagepassed

    comp.emitter.pipe(first()).subscribe((message) => 
      expect(message).toBe(messagepassed)
    )
  })

  it('Peux être créé', () => {
    expect(component).toBeTruthy();
  });
});
