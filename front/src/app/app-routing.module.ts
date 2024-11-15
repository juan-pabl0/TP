import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { LoginComponent } from './login/login.component';
import { PartidoComponent } from './partido/partido.component';
import { TorneoComponent } from './torneo/torneo.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin/admin.component';
import { ParticipanteComponent } from './participante/participante.component';



const routes: Routes = [
    { path: 'inicio', component: PaginaInicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'partidos', component: PartidoComponent},
    { path: 'torneos', component: TorneoComponent},
    { path: 'registro', component: RegistroComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'participante', component: ParticipanteComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
