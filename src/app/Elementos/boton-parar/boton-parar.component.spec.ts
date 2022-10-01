import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonPararComponent } from './boton-parar.component';

describe('BotonPararComponent', () => {
  let component: BotonPararComponent;
  let fixture: ComponentFixture<BotonPararComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonPararComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonPararComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
