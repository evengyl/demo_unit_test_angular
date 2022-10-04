import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("clicked() passe bien à l'état true/false isOn", () => {
    const comp = new LightswitchComponent();

    expect(comp.isOn)
      .withContext('false en démarrant')
      .toBe(false);

    comp.clicked();

    expect(comp.isOn)
      .withContext("true dès qu'on click")
      .toBe(true);

    comp.clicked();

    expect(comp.isOn)
      .withContext("false dès qu'on re-click")
      .toBe(false);

  })

  it('Ok peux être créé', () => {
    expect(component).toBeTruthy();
  });
});
