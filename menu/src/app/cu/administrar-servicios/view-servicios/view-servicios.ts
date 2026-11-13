import { Component } from '@angular/core';
import { ModalServicio } from '../modal-servicio/modal-servicio';

@Component({
  selector: 'app-view-servicios',
  imports: [ModalServicio],
  templateUrl: './view-servicios.html',
  styleUrl: './view-servicios.css',
})
export class ViewServicios {

  servicios: any[] = [
    { id: 1, nombre: 'Instalación de software', precio: 50 },
    { id: 2, nombre: 'Mantenimiento de PC', precio: 80 },
    { id: 3, nombre: 'Soporte técnico remoto', precio: 30 },
    { id: 4, nombre: 'Configuración de redes', precio: 120 }
  ];

  mostrarModal = false;
  servicioSeleccionado: any = null;

  editarServicio(servicio: any) {
    this.servicioSeleccionado = { ...servicio };
    this.mostrarModal = true;
  }

  guardarServicio(servicioActualizado: any) {
    // Se muestra en la consola del navegador (F12)
    console.log('Servicio guardado:', servicioActualizado);

    this.servicios = this.servicios.map(s =>
      s.id === servicioActualizado.id ? servicioActualizado : s
    );

    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.servicioSeleccionado = null;
  }
}
