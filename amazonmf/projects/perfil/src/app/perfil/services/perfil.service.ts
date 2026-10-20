import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private perfil:Perfil = {
    nombre: 'Ruben Garcia Rivera',
    correo: 'rgrivera@indra.es'
  }

  constructor() { }

  getPerfil()
  {
    return this.perfil;
  }

  actualizarPerfil (nombre:string, correo:string)
  {
    this.perfil = {nombre, correo};
  }
}
