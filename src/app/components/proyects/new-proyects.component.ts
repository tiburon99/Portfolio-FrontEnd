import { Router } from '@angular/router';
import { ProyectosService } from './../../servicios/proyectos.service';
import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';

@Component({
  selector: 'app-new-proyects',
  templateUrl: './new-proyects.component.html',
  styleUrls: ['./new-proyects.component.css']
})
export class NewProyectsComponent implements OnInit {
  tituloP: string = '';
  descripcionP: string = '';
  imgProyecto: string = '';
  constructor(private sProyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.tituloP, this.descripcionP, this.imgProyecto);
    this.sProyectos.save(proyectos).subscribe(
      data=>{alert("Proyecto añadido.");
      this.router.navigate(['']);
    
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    
    )
  }


}
