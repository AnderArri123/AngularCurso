import { Component, OnInit } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  borrado: string='';

  heroes: string[] = ['hulk', 'ironman', 'thor'];

  borrar():void {
    this.borrado = this.heroes.shift() || '';
  }
  
}

