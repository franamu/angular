import { Injectable } from '@angular/core';

//Esto es para poder realizar las peticiones http
import { HttpClient } from '@angular/common/http'

//Tambien importamos una libreria para mapear las respuestas http
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//Importamos tambien el objeto observable que nos va a permitir utilizar rxjs que es la respuesta del
// mapeo y trabajar con ello.
import { Observable } from 'rxjs';

//Definimos el decorador injectable
@Injectable()

//Exportamos la clase del servicio

export class ServicioSlide {

	/*===========================================
	=            PRUEBA DEL SERVICIO            =
	===========================================*/
	
	public ruta_foto = "assets/img/slide/slide01.jpg";

	prueba() {

		return this.ruta_foto;
	}
	
	/*=====  End of PRUEBA DEL SERVICIO  ======*/
	
}