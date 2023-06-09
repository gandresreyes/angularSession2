import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  get hostorial(){
    return this.gifsService.historial;
  }
  constructor(private gifsService:GifsService ){}
  buscar(query:string){
    this.gifsService.buscarGifs(query)
  }

}
