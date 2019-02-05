import { Component } from '@angular/core';

//Importamos la clase del servicio slide
import { ServicioSlide } from '../servicios/slide.servicio';

@Component({

	selector: "tag-slide",
	templateUrl: "../vistas/slide.html",
	providers: [ServicioSlide]
})

export class SlideComponente {

	constructor(private _ServicioSlide:ServicioSlide) {
		
		/*=======================================
		=            Prueba servicio            =
		=======================================*/
		
		console.log(this._ServicioSlide.prueba());
		
		/*=====  End of Prueba servicio  ======*/

	}
} 	