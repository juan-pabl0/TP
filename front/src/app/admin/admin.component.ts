import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})

export class AdminComponent {

  constructor (private service: AdminService) {
  }
  
  list:any = [];
  torneo:any = Object;

  ngOnInit(): void{

  }

  /*loadAdmins(){
    return this.service.getAdmins().subscribe(response => this.list = response);
  }

  loadOne(id:string){
    return this.service.getOneAdmin(id).subscribe(response => this.admin = response);
  }

  removeAdmin(id:string){
    return this.service.remove(id).subscribe(response => this.admin = response);
  }*/

  addTorneo(nombre_torneo:string, fecha_inicio_torneo:string, fecha_fin_torneo:string, admin:string, sucursal:string, estado_torneo: string, formato_torneo: string, id: string){
    return this.service.add(nombre_torneo, fecha_inicio_torneo, fecha_fin_torneo, parseInt(admin), parseInt(sucursal), parseInt(estado_torneo), parseInt(formato_torneo), parseInt(id)).subscribe(response => this.torneo = response);
  }

  crearEquipos(){
    return
  }

  /*putAdmin(nombre:string, contraseña:string, apellido:string, mail:string, fecha_nacimiento:string, id: string){
    return this.service.modAdmin(nombre, contraseña, apellido, mail, fecha_nacimiento, parseInt(id)).subscribe(response => this.admin = response);
  }*/
}
