//Es una envoltura alrededor de un modulo que incluye tambièn los proveedores
import { ModuleWithProviders } from '@angular/core';
//otra cosa
import { Routes , RouterModule } from '@angular/router';

//Importamos los Componentes
import { IndexComponente } from './componentes/index';
import { ApiComponente } from './componentes/api';

//conjunto de rutas donde se describe a donde nos vamos a desplazar dentro de la aplicacion
const appRoutes: Routes = [ 	
	{path: "", component: IndexComponente},
	{path: "index", component: IndexComponente},
	{path: "api", component: ApiComponente},
	{path: "**", component: IndexComponente}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);