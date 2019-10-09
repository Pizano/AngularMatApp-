import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InventarioComponent } from './inventario/inventario.component';
import { HomeComponent } from './home/home.component';
import { InventarioDetailsComponent } from './inventario-details/inventario-details.component';
import { InventarioCreateComponent } from './inventario-create/inventario-create.component';


@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    HomeComponent,
    InventarioDetailsComponent,
    InventarioCreateComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
