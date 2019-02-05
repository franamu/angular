import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Agregar http module para trabajar con cabeceras http
import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponente } from './componentes/index';
import { SlideComponente } from './componentes/slide';
import { GaleriaComponente } from './componentes/galeria';
import { MouseComponente } from './componentes/mouse';
import { ScrollComponente } from './componentes/scroll';
import { FormularioComponente } from './componentes/formulario';
import { ApiComponente } from './componentes/api';

//Importamos módulos de ruta
import { routing, appRoutingProviders } from './app.rutas';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    MouseComponente,
    ScrollComponente,
    FormularioComponente,
    ApiComponente
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
