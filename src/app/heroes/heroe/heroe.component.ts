import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    nombre: string = ' Hulk ';

    edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    funcion(): string{
        return `${this.nombre} / ${this.edad} Años`
        //return this.nombre + ' / ' + this.edad;
    }

    cambiarHeroe():void {
        this.nombre='Spiderman';
    }

    cambiarEdad():void {
        this.edad=35;
    }

}
