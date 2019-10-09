import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component'
import { HomeComponent } from './home/home.component';
import { InventarioDetailsComponent } from './inventario-details/inventario-details.component';
import { InventarioCreateComponent } from './inventario-create/inventario-create.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent},
  { path: 'detail/:id', component: InventarioDetailsComponent},
  { path : 'inventario', component : InventarioComponent },
  { path : 'create', component : InventarioCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
