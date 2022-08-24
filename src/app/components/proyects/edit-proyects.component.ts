import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosService } from './../../servicios/proyectos.service';
import { Proyectos } from './../../model/proyectos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-proyects',
  templateUrl: './edit-proyects.component.html',
  styleUrls: ['./edit-proyects.component.css']
})
export class EditProyectsComponent implements OnInit {
  proyectos:Proyectos=null;

  constructor(private sProyectos: ProyectosService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectos.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
      )
    }

    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.sProyectos.update(id, this.proyectos).subscribe(
        data => {
          this.router.navigate(['']);
          alert("Proyecto modificado")
        }, err =>{
           alert("Error al modificar");
           this.router.navigate(['']);
        }
      )
  
      }
  }

