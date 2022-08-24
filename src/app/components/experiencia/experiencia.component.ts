import { Experiencia } from './../../model/experiencia';
import { TokenService } from './../../servicios/token.service';
import { ExperienciaService } from './../../servicios/experiencia.service';
import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experienceList:any;

  expe: Experiencia[] = [];

  constructor(private datosPortfolio:PortfolioService, private sExperiencia: ExperienciaService, private tokenService: TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.datosPortfolio.obtenerDatos().subscribe(data=>{ console.log(data);
      this.experienceList=data.experience;
    })

    if(this.tokenService.getToken()){
      this.isLogged=true;
    } else{
      this.isLogged=false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data=>{this.expe = data;})
  }

  delete(id?:number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data=>{
          this.cargarExperiencia();
        }, err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }

}
