import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSeguirComponent } from './boton-seguir.component';

describe('BotonSeguirComponent', () => {
  let component: BotonSeguirComponent;
  let fixture: ComponentFixture<BotonSeguirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSeguirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonSeguirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
