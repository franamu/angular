import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponente } from './componentes/index';
import { SlideComponente } from './componentes/slide';
import { GaleriaComponente } from './componentes/galeria';
import { MouseComponente } from './componentes/mouse';
import { ScrollComponente } from './componentes/scroll';
import { FormularioComponente } from './componentes/formulario';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponente,
    SlideComponente,
    GaleriaComponente,
    MouseComponente,
    ScrollComponente,
    FormularioComponente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
