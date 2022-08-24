import { Experiencia } from './../../model/experiencia';
import { Router } from '@angular/router';
import { ExperienciaService } from './../../servicios/experiencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  duracionE: string = '';
  descripcionE: string = '';
  imgExp: string = '' ;
  
  constructor(private sExperiencia:ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.duracionE, this.descripcionE, this.imgExp );
    this.sExperiencia.save(expe).subscribe(
      data=>{alert("Experiencia añadida.");
      this.router.navigate(['']);
    
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    
    )
  }

}
