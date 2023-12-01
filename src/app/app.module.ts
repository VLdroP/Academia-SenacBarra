import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { PlanosComponent } from './planos/planos.component';
import { ContentComponent } from './content/content.component';

import { ReactiveFormsModule} from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common'
import {clienteService} from './servicos/cliente.service'
import { QuemSomosComponent } from './quem-somos/quem-somos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroClientesComponent,
    PlanosComponent,
    ContentComponent,
    QuemSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [clienteService, HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
