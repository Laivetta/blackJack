import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { JugadorService } from '../../Services/jugador.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
})
export class AltaComponent implements OnInit, OnDestroy {
  mensajeError: string;
  formularioAlta: UntypedFormGroup;
  suscripcion = new Subscription();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private jugadorService: JugadorService
  ) {
    this.formularioAlta = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  valores=[10,20,30]

  ngOnInit(): void {}

  registrar() {
    if (this.formularioAlta.invalid) {
      this.mensajeError = 'debe completar todos los campos';

      setTimeout(() => {
        this.mensajeError = '';
      }, 2000);
    } else {
      const objetoAlta = this.formularioAlta.value;

      this.suscripcion.add(
        this.jugadorService
          .registrarse(objetoAlta.username, objetoAlta.password)
          .subscribe({
            next: () => {
              alert('jugador cargado con exito');
            },
            error: (e) => {
              alert('error al dar de alta jugador: ' + e);
            },
          })
      );
    }
  }
}
