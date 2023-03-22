import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtbuscar') txtbuscar!:ElementRef<HTMLInputElement>;
  constructor(private gifsservice : GifsService ){}

  buscar(){
    const value = this.txtbuscar.nativeElement.value   
    if(value.trim().length === 0){
      return ;
    }
    this.gifsservice.buscarGifs(value);
    this.txtbuscar.nativeElement.value = "";
  }

}
