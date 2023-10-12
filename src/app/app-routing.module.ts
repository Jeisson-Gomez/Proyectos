import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'AgregarEmpleadoComponent' },
  { path: 'Agregar-Empleado', component: AgregarEmpleadoComponent },
  { path: 'Editar-Empleado', component: EditarEmpleadoComponent },
  { path: 'Editar-Empleado/:id', component: EditarEmpleadoComponent },
  { path: 'Listar-Empleado', component: ListarEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
