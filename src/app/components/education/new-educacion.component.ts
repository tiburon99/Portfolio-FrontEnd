import { Educacion } from './../../model/educacion';
import { Router } from '@angular/router';
import { EducacionService } from './../../servicios/educacion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreE: string = '';
  duracionE: string = '';
  descripcionE: string = '';
  imgEdu: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.duracionE, this.descripcionE, this.imgEdu );
    this.sEducacion.save(educacion).subscribe(
      data=>{alert("Educación añadida.");
      this.router.navigate(['']);
    
    }, err =>{
      alert("Falló");
      this.router.navigate([''])
    }
    
    )
  }

}
