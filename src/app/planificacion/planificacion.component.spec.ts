import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionComponent } from './planificacion.component';

describe('PlanificacionComponent', () => {
  let component: PlanificacionComponent;
  let fixture: ComponentFixture<PlanificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
