import { ActivatedRoute, Router } from '@angular/router';
import { EducacionService } from './../../servicios/educacion.service';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private sEducacion: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Educación modificada")
      }, err =>{
         alert("Error al modificar casillero de educación");
         this.router.navigate(['']);
      }
    )
  }

}
