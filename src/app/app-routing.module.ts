import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { PlanosComponent } from './planos/planos.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

 const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent},
  { path: 'planos', component: PlanosComponent},
  { path: 'quem-somos', component: QuemSomosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
